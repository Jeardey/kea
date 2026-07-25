import { WebpackFinder } from "./webpack/finder";
import { MappingGenerator } from "./webpack/generator";

declare global {
	interface Window {
		Kea?: {
			WebpackFinder: typeof WebpackFinder;
			MappingGenerator: typeof MappingGenerator;
		};
	}
}

if (!(window as any).__kea_injected) {
	(window as any).__kea_injected = true;
	window.Kea = {
		WebpackFinder,
		MappingGenerator,
	};

	function blockTelemetryLoudly() {
		const origFetch = window.fetch;
		window.fetch = async function (input: RequestInfo | URL, init?: RequestInit) {
			try {
				const url =
					typeof input === "string"
						? input
						: input instanceof URL
							? input.href
							: (input as Request)?.url;
				if (
					url &&
					(url.includes("/science") ||
						url.includes("/beaker") ||
						url.includes("/sentry_key") ||
						url.includes("sentry.io"))
				) {
					return new Response(JSON.stringify({}), { status: 200 });
				}
			} catch (_e) {}
			return origFetch.call(this, input, init);
		};

		const origOpen = XMLHttpRequest.prototype.open;
		(XMLHttpRequest.prototype as any).open = function (this: XMLHttpRequest, ...args: any[]) {
			try {
				const urlObj = args[1];
				const url =
					typeof urlObj === "string" ? urlObj : urlObj instanceof URL ? urlObj.href : urlObj;
				if (
					typeof url === "string" &&
					(url.includes("/science") ||
						url.includes("/beaker") ||
						url.includes("/sentry_key") ||
						url.includes("sentry.io"))
				) {
					(this as any).__kea_blocked = true;
				}
			} catch (_e) {}
			return origOpen.apply(this, args as any);
		};

		const origSend = XMLHttpRequest.prototype.send;
		XMLHttpRequest.prototype.send = function (...args: any[]) {
			if ((this as any).__kea_blocked) {
				setTimeout(() => this.dispatchEvent(new Event("error")), 0);
				return;
			}
			return origSend.apply(this, args as any);
		};
	}

	blockTelemetryLoudly();

	/**
	 * Waits until UserStore has received the user profile from CONNECTION_OPEN
	 */
	async function waitForCurrentUser(UserStore: any): Promise<any> {
		const current = UserStore.getCurrentUser?.();
		if (current) return current;

		return new Promise((resolve) => {
			const onChange = () => {
				const user = UserStore.getCurrentUser?.();
				if (user) {
					UserStore.removeChangeListener?.(onChange);
					resolve(user);
				}
			};

			UserStore.addChangeListener?.(onChange);

			// fallback
			const interval = setInterval(() => {
				const user = UserStore.getCurrentUser?.();
				if (user) {
					clearInterval(interval);
					UserStore.removeChangeListener?.(onChange);
					resolve(user);
				}
			}, 100);
		});
	}

	async function bootKea() {
		console.log("%c[kea] booting up...", "color: #3b82f6; font-size: 16px; font-weight: bold;");

		await WebpackFinder.init();

		console.log("%c[kea] waiting for UserStore...", "color: #6b7280;");

		const UserStore = await WebpackFinder.waitForStoreName("UserStore");
		console.log("%c[kea] successfully mapped webpack!", "color: #10b981; font-weight: bold;");

		const currentUser = await waitForCurrentUser(UserStore);
		console.log(
			"%c[kea] logged in as:",
			"color: #10b981; font-weight: bold;",
			`${currentUser.username} (${currentUser.id})`
		);
	}

	bootKea();
}
