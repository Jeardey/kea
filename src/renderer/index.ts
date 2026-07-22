import { WebpackFinder } from "./webpack/finder";

if (!(window as any).__kea_injected) {
    (window as any).__kea_injected = true;

    function blockTelemetryLoudly() {
        const origFetch = window.fetch;
        window.fetch = async function (...args) {
            try {
                const urlObj = args[0];
                const url =
                    typeof urlObj === "string"
                        ? urlObj
                        : urlObj instanceof URL
                          ? urlObj.href
                          : (urlObj as Request)?.url;
                if (
                    url &&
                    (url.includes("/science") || url.includes("sentry.io"))
                ) {
                    return new Response(JSON.stringify({}), { status: 200 });
                }
            } catch (e) {}
            return origFetch.apply(this, args);
        };

        // TODO: fix this shit error idk
        const origOpen = XMLHttpRequest.prototype.open;
        XMLHttpRequest.prototype.open = function (...args) {
            try {
                const urlObj = args[1];
                const url =
                    typeof urlObj === "string"
                        ? urlObj
                        : urlObj instanceof URL
                          ? urlObj.href
                          : urlObj;
                if (
                    typeof url === "string" &&
                    (url.includes("/science") || url.includes("sentry.io"))
                ) {
                    (this as any).__kea_blocked = true;
                }
            } catch (e) {}
            return origOpen.apply(this, args as any);
        };

        const origSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function (...args) {
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
        console.log(
            "%c[kea] booting up...",
            "color: #3b82f6; font-size: 16px; font-weight: bold;",
        );

        await WebpackFinder.init();

        console.log("%c[kea] waiting for UserStore...", "color: #6b7280;");

        const UserStore = await WebpackFinder.waitForStoreName("UserStore");
        console.log(
            "%c[kea] successfully mapped webpack!",
            "color: #10b981; font-weight: bold;",
        );

        // wait for discord's websocket gateway connection to get the UserStore
        const currentUser = await waitForCurrentUser(UserStore);

        console.log(
            "%c[kea] logged in as:",
            "color: #10b981; font-weight: bold;",
            `${currentUser.username} (${currentUser.id})`,
        );
    }

    bootKea();
}
