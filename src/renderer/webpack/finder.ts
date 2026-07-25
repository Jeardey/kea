import { WebpackPatcher } from "../patcher/webpack";
import { Logger } from "../utils/logger";

const logger = new Logger("WebpackFinder", "#8b5cf6");

export type WebpackExports = Record<string, unknown>;
export type WebpackRequire = {
    c: Record<string | number, { exports: WebpackExports; loaded?: boolean }>;
    m: Record<string | number, (...args: unknown[]) => unknown>;
    (id: string | number): WebpackExports;
};

type PredicateFn = (exports: unknown) => boolean;

declare global {
    interface Window {
        webpackChunkdiscord_app?: unknown[];
        __kea_wpRequire?: WebpackRequire;
    }
}

function isIgnoredModule(exports: unknown): boolean {
    if (!exports || exports === window) return true;
    if (typeof exports !== "object" && typeof exports !== "function")
        return true;

    const record = exports as Record<string | symbol, unknown>;
    if (
        record[Symbol.toStringTag] === "IntlMessagesProxy" ||
        record.$$loader ||
        record.$$baseObject
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
            const chunkArray = window.webpackChunkdiscord_app;

            if (Array.isArray(chunkArray)) {
                for (const chunk of chunkArray) {
                    if (Array.isArray(chunk) && chunk[1]) {
                        WebpackPatcher.processChunkModules(
                            chunk[1] as Record<
                                string | number,
                                (...args: unknown[]) => unknown
                            >,
                        );
                    }
                }

                const originalPush = chunkArray.push;
                chunkArray.push = function (...args: unknown[]) {
                    const chunk = args[0];
                    if (Array.isArray(chunk) && chunk[1]) {
                        WebpackPatcher.processChunkModules(
                            chunk[1] as Record<
                                string | number,
                                (...args: unknown[]) => unknown
                            >,
                        );
                    }
                    return originalPush.apply(this, args as []);
                };
            }

            const tryInject = () => {
                if (!Array.isArray(window.webpackChunkdiscord_app)) return;
                window.webpackChunkdiscord_app.push([
                    [symbolId],
                    {
                        __kea_dummy__: (
                            _m: unknown,
                            _e: unknown,
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

    public static find<T = WebpackExports>(predicate: PredicateFn): T | null {
        if (!WebpackFinder.wpRequire) return null;

        const checkCandidate = (exports: unknown): unknown => {
            if (isIgnoredModule(exports)) return null;

            try {
                if (predicate(exports)) return exports;
            } catch {}

            const record = exports as Record<string, unknown>;
            try {
                if (
                    record.default &&
                    !isIgnoredModule(record.default) &&
                    predicate(record.default)
                ) {
                    return record.default;
                }
            } catch {}

            try {
                for (const key in record) {
                    if (key === "default") continue;
                    try {
                        const val = record[key];
                        if (val && !isIgnoredModule(val) && predicate(val)) {
                            return val;
                        }
                    } catch {}
                }
            } catch {}

            return null;
        };

        for (const id in WebpackFinder.wpRequire.c) {
            const mod = WebpackFinder.wpRequire.c[id];
            if (!mod?.exports) continue;
            const match = checkCandidate(mod.exports);
            if (match) return match as T;
        }

        return null;
    }

    public static findBulk<T extends unknown[]>(
        ...predicates: PredicateFn[]
    ): { [K in keyof T]: T[K] | null } {
        const results = new Array(predicates.length).fill(null) as {
            [K in keyof T]: T[K] | null;
        };
        if (!WebpackFinder.wpRequire) return results;

        let remaining = predicates.length;
        for (const id in WebpackFinder.wpRequire.c) {
            const mod = WebpackFinder.wpRequire.c[id];
            if (!mod?.exports || isIgnoredModule(mod.exports)) continue;

            for (let i = 0; i < predicates.length; i++) {
                if (results[i] !== null) continue;
                const pred = predicates[i];
                if (pred?.(mod.exports)) {
                    results[i] = mod.exports as T[number];
                    remaining--;
                    if (remaining === 0) return results;
                }
            }
        }

        return results;
    }

    public static findByProps<T = WebpackExports>(
        ...props: string[]
    ): T | null {
        const cacheKey = props.join(",");
        const cached = WebpackFinder.propsCache.get(cacheKey);
        if (cached !== undefined) {
            return cached as T | null;
        }

        const hasProps = (obj: unknown) => {
            if (isIgnoredModule(obj)) return false;
            const record = obj as Record<string, unknown>;

            try {
                for (const prop of props) {
                    if (!(prop in record) || record[prop] === undefined)
                        return false;
                }
                return true;
            } catch {
                return false;
            }
        };

        const found = WebpackFinder.find<T>(hasProps);
        WebpackFinder.propsCache.set(
            cacheKey,
            (found as WebpackExports) ?? null,
        );
        return found;
    }

    public static findByCode<T = WebpackExports>(
        code: string | RegExp,
    ): T | null {
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
                        return ((mod as Record<string, unknown>).default ??
                            mod) as T;
                    }
                } catch {}
            }
        }

        return null;
    }

    public static mapMangledModule<K extends string>(
        codeFilter: string | RegExp,
        mappers: Record<K, PredicateFn>,
    ): Record<K, unknown> {
        const result = {} as Record<K, unknown>;
        const mod = WebpackFinder.findByCode(codeFilter) as Record<
            string,
            unknown
        > | null;
        if (!mod) return result;

        for (const propKey in mod) {
            const val = mod[propKey];
            for (const mapKey in mappers) {
                const predicate = mappers[mapKey];
                if (predicate?.(val)) {
                    result[mapKey] = val;
                }
            }
        }

        return result;
    }

    public static proxyLazy<T extends object>(factory: () => T | null): T {
        let cached: T | null = null;
        return new Proxy({} as T, {
            get(_target, prop: string | symbol) {
                if (!cached) {
                    cached = factory();
                }
                if (!cached) {
                    logger.error(
                        `Lazy proxy evaluation returned null for property access: ${String(prop)}`,
                    );
                    return undefined;
                }
                return Reflect.get(cached, prop);
            },
        });
    }

    public static getDispatcher(): unknown {
        const UserStore = WebpackFinder.findByStoreName("UserStore") as Record<
            string,
            unknown
        > | null;
        return UserStore?._dispatcher;
    }

    public static findByStoreName<T = WebpackExports>(name: string): T | null {
        const cached = WebpackFinder.storeCache.get(name);
        if (cached !== undefined) {
            return cached as T | null;
        }

        const found = WebpackFinder.find<T>((m) => {
            try {
                const record = m as { getName?: () => string };
                return (
                    typeof record?.getName === "function" &&
                    record.getName() === name
                );
            } catch {
                return false;
            }
        });

        WebpackFinder.storeCache.set(name, (found as WebpackExports) ?? null);
        return found;
    }

    public static async waitForStoreName<T = WebpackExports>(
        name: string,
    ): Promise<T> {
        return WebpackFinder.waitForModule<T>((m) => {
            try {
                const record = m as { getName?: () => string };
                return (
                    typeof record?.getName === "function" &&
                    record.getName() === name
                );
            } catch {
                return false;
            }
        });
    }

    public static async waitForModule<T = WebpackExports>(
        predicate: PredicateFn,
    ): Promise<T> {
        await WebpackFinder.init();

        return new Promise((resolve) => {
            const initialFound = WebpackFinder.find<T>(predicate);
            if (initialFound) return resolve(initialFound);

            const interval = setInterval(() => {
                const res = WebpackFinder.find<T>(predicate);
                if (res) {
                    clearInterval(interval);
                    resolve(res);
                }
            }, 50);
        });
    }

    public static async waitForProps<T = WebpackExports>(
        ...props: string[]
    ): Promise<T> {
        return WebpackFinder.waitForModule<T>((m) => {
            if (isIgnoredModule(m)) return false;
            const record = m as Record<string, unknown>;
            try {
                for (const prop of props) {
                    if (!(prop in record) || record[prop] === undefined)
                        return false;
                }
                return true;
            } catch {
                return false;
            }
        });
    }
}
