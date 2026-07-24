import { WebpackPatcher } from "../patcher/webpack";

export type WebpackExports = Record<string, any>;
export type WebpackRequire = {
    c: Record<string | number, { exports: WebpackExports }>;
    m: Record<string | number, (...args: any[]) => any>;
    (id: string | number): WebpackExports;
};

declare global {
    interface Window {
        webpackChunkdiscord_app?: any[];
        __kea_wpRequire?: WebpackRequire;
    }
}

function isIgnoredModule(exports: any): boolean {
    if (!exports || exports === window) return true;
    if (
        exports[Symbol.toStringTag] === "IntlMessagesProxy" ||
        exports.$$loader ||
        exports.$$baseObject
    ) {
        return true;
    }
    return false;
}

export class WebpackFinder {
    private static wpRequire: WebpackRequire | null = null;
    private static initPromise: Promise<WebpackRequire> | null = null;
    private static propsCache = new Map<string, WebpackExports | null>();
    private static storeCache = new Map<string, WebpackExports | null>();

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

            window.webpackChunkdiscord_app =
                window.webpackChunkdiscord_app || [];

            for (const chunk of window.webpackChunkdiscord_app) {
                if (chunk?.[1]) {
                    WebpackPatcher.processChunkModules(chunk[1]);
                }
            }

            const originalPush = window.webpackChunkdiscord_app.push;
            window.webpackChunkdiscord_app.push = function (...args: any[]) {
                const chunk = args[0];
                if (chunk?.[1]) {
                    WebpackPatcher.processChunkModules(chunk[1]);
                }
                return originalPush.apply(this, args);
            };

            const tryInject = () => {
                window.webpackChunkdiscord_app?.push([
                    [symbolId],
                    {
                        __kea_dummy__: (
                            _m: any,
                            _e: any,
                            req: WebpackRequire,
                        ) => {
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

    public static find(
        predicate: (exports: any) => boolean,
    ): WebpackExports | null {
        if (!WebpackFinder.wpRequire) return null;

        const checkCandidate = (exports: any): any => {
            if (isIgnoredModule(exports)) return null;

            try {
                if (predicate(exports)) return exports;
            } catch {}
            try {
                if (
                    exports.default &&
                    !isIgnoredModule(exports.default) &&
                    predicate(exports.default)
                )
                    return exports.default;
            } catch {}
            try {
                for (const key in exports) {
                    if (key === "default") continue;
                    try {
                        const val = exports[key];
                        if (val && !isIgnoredModule(val) && predicate(val))
                            return val;
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
        const cacheKey = props.join(",");
        const cached = WebpackFinder.propsCache.get(cacheKey);
        if (cached !== undefined) {
            return cached;
        }

        const hasProps = (obj: any) => {
            if (isIgnoredModule(obj)) return false;

            try {
                for (const prop of props) {
                    if (!(prop in obj) || obj[prop] === undefined) return false;
                }
                return true;
            } catch {
                return false;
            }
        };

        const found = WebpackFinder.find(hasProps);
        WebpackFinder.propsCache.set(cacheKey, found);
        return found;
    }

    public static findByCode(code: string | RegExp): WebpackExports | null {
        if (!WebpackFinder.wpRequire) return null;

        for (const id in WebpackFinder.wpRequire.m) {
            const fn = WebpackFinder.wpRequire.m[id];
            if (!fn) continue;

            let matches = false;
            try {
                const fnStr = fn.toString();
                matches =
                    typeof code === "string"
                        ? fnStr.includes(code)
                        : code.test(fnStr);
            } catch {}

            if (matches) {
                try {
                    const mod = WebpackFinder.wpRequire(id);
                    if (mod) {
                        return mod.default ?? mod;
                    }
                } catch {}
            }
        }

        return null;
    }

    public static getDispatcher(): any {
        const UserStore = WebpackFinder.findByStoreName("UserStore");
        return UserStore?._dispatcher;
    }

    public static findByStoreName(name: string): WebpackExports | null {
        const cached = WebpackFinder.storeCache.get(name);
        if (cached !== undefined) {
            return cached;
        }

        const found = WebpackFinder.find((m) => {
            try {
                return typeof m?.getName === "function" && m.getName() === name;
            } catch {
                return false;
            }
        });

        WebpackFinder.storeCache.set(name, found);
        return found;
    }

    public static async waitForStoreName(
        name: string,
    ): Promise<WebpackExports> {
        return WebpackFinder.waitForModule((m) => {
            try {
                return typeof m?.getName === "function" && m.getName() === name;
            } catch {
                return false;
            }
        });
    }

    public static async waitForModule(
        predicate: (exports: any) => boolean,
    ): Promise<WebpackExports> {
        await WebpackFinder.init();

        return new Promise((resolve) => {
            const initialFound = WebpackFinder.find(predicate);
            if (initialFound) return resolve(initialFound);

            const interval = setInterval(() => {
                const res = WebpackFinder.find(predicate);
                if (res) {
                    clearInterval(interval);
                    resolve(res);
                }
            }, 50);
        });
    }

    public static async waitForProps(
        ...props: string[]
    ): Promise<WebpackExports> {
        return WebpackFinder.waitForModule((m) => {
            if (isIgnoredModule(m)) return false;
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
