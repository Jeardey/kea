export type WebpackExports = Record<string, any>;
export type WebpackRequire = {
	c: Record<string | number, { exports: WebpackExports }>;
	m: Record<string | number, Function>;
	(id: string | number): WebpackExports;
};

declare global {
	interface Window {
		webpackChunkdiscord_app?: any[];
		__kea_wpRequire?: WebpackRequire;
	}
}

export class WebpackFinder {
	private static wpRequire: WebpackRequire | null = null;
	private static initPromise: Promise<WebpackRequire> | null = null;

	public static async init(): Promise<WebpackRequire> {
		if (WebpackFinder.wpRequire) return WebpackFinder.wpRequire;
		if (WebpackFinder.initPromise) return WebpackFinder.initPromise;

		WebpackFinder.initPromise = new Promise((resolve) => {
			const symbolId = Symbol("kea_finder");

			const handleReq = (req: WebpackRequire) => {
				if (WebpackFinder.wpRequire) return;
				WebpackFinder.wpRequire = req;
				window.__kea_wpRequire = req;
				resolve(req);
			};

			const tryInject = () => {
				window.webpackChunkdiscord_app = window.webpackChunkdiscord_app || [];
				window.webpackChunkdiscord_app.push([
					[symbolId],
					{
						__kea_dummy__: (_m: any, _e: any, req: WebpackRequire) => {
							handleReq(req);
						},
					},
					(req: WebpackRequire) => {
						handleReq(req);
					},
				]);
			};

			tryInject();

			if (!WebpackFinder.wpRequire) {
				const interval = setInterval(() => {
					if (WebpackFinder.wpRequire) {
						clearInterval(interval);
					} else {
						tryInject();
					}
				}, 20);
			}
		});

		return WebpackFinder.initPromise;
	}

	public static loadAll(): void {
		if (!WebpackFinder.wpRequire) return;
		for (const id in WebpackFinder.wpRequire.m) {
			if (!WebpackFinder.wpRequire.c[id]) {
				try {
					WebpackFinder.wpRequire(id);
				} catch {}
			}
		}
	}

	public static find(predicate: (exports: any) => boolean): WebpackExports | null {
		if (!WebpackFinder.wpRequire) return null;

		const checkCandidate = (exports: any): any => {
			if (!exports || exports === window) return null;

			try {
				if (predicate(exports)) return exports;
			} catch {}
			try {
				if (exports.default && predicate(exports.default)) return exports.default;
			} catch {}
			try {
				for (const key in exports) {
					if (key === "default") continue;
					try {
						const val = exports[key];
						if (val && predicate(val)) return val;
					} catch {}
				}
			} catch {}

			return null;
		};

		for (const id in WebpackFinder.wpRequire.c) {
			const mod = WebpackFinder.wpRequire.c[id];
			if (!mod?.exports) continue;
			const match = checkCandidate(mod.exports);
			if (match) return match;
		}

		return null;
	}

	public static findByProps(...props: string[]): WebpackExports | null {
		const hasProps = (obj: any) => {
			if (!obj || (typeof obj !== "object" && typeof obj !== "function")) return false;

			// ignore i18n translation proxies
			if (obj.$$loader || obj.$$baseObject) return false;

			try {
				for (const prop of props) {
					if (!(prop in obj) || obj[prop] === undefined) return false;
				}
				return true;
			} catch {
				return false;
			}
		};

		let found = WebpackFinder.find(hasProps);
		if (!found && WebpackFinder.wpRequire) {
			WebpackFinder.loadAll();
			found = WebpackFinder.find(hasProps);
		}

		return found;
	}

	public static findByStoreName(name: string): WebpackExports | null {
		return WebpackFinder.find((m) => {
			try {
				return typeof m?.getName === "function" && m.getName() === name;
			} catch {
				return false;
			}
		});
	}

	public static async waitForStoreName(name: string): Promise<WebpackExports> {
		return WebpackFinder.waitForModule((m) => {
			try {
				return typeof m?.getName === "function" && m.getName() === name;
			} catch {
				return false;
			}
		});
	}

	public static async waitForModule(predicate: (exports: any) => boolean): Promise<WebpackExports> {
		await WebpackFinder.init();

		return new Promise((resolve) => {
			const initialFound = WebpackFinder.find(predicate);
			if (initialFound) return resolve(initialFound);

			WebpackFinder.loadAll();
			const loadedFound = WebpackFinder.find(predicate);
			if (loadedFound) return resolve(loadedFound);

			const interval = setInterval(() => {
				const res = WebpackFinder.find(predicate);
				if (res) {
					clearInterval(interval);
					resolve(res);
				}
			}, 50);
		});
	}

	public static async waitForProps(...props: string[]): Promise<WebpackExports> {
		return WebpackFinder.waitForModule((m) => {
			if (!m || (typeof m !== "object" && typeof m !== "function")) return false;
			if (m.$$loader || m.$$baseObject) return false;
			try {
				for (const prop of props) {
					if (!(prop in m) || m[prop] === undefined) return false;
				}
				return true;
			} catch {
				return false;
			}
		});
	}
}
