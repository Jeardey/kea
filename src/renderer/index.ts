/** biome-ignore-all lint/complexity/noUselessEscapeInRegex: ; */
if (
    typeof window !== "undefined" &&
    typeof (window as any).process === "undefined"
) {
    (window as any).process = { env: { NODE_ENV: "production" } };
}

import { ExtensionManager } from "@extensions/index";
import { Logger } from "../renderer/utils/logger";
import { Patcher } from "./patcher";
import { WebpackPatcher } from "./patcher/webpack";
import { SettingsUI } from "./ui/settings";
import { WebpackFinder } from "./webpack/finder";
import { MappingGenerator } from "./webpack/generator";
import { Stores } from "./webpack/stores";

const logger = new Logger("Renderer", "#3b82f6");

declare global {
    interface Window {
        Kea?: {
            WebpackFinder: typeof WebpackFinder;
            MappingGenerator: typeof MappingGenerator;
            Stores: typeof Stores;
            Patcher: typeof Patcher;
            ExtensionManager: typeof ExtensionManager;
        };
    }
}

if (!(window as any).__kea_injected) {
    (window as any).__kea_injected = true;
    window.Kea = {
        WebpackFinder,
        MappingGenerator,
        Stores,
        Patcher,
        ExtensionManager,
    };

    // TODO: move all killSentry, blockTelemetryNetwork and etc functions to separate file
    function killSentry(): void {
        Object.defineProperty(Function.prototype, "d", {
            configurable: true,
            set(esmDeclareFunc) {
                Object.defineProperty(this, "d", {
                    value: esmDeclareFunc,
                    configurable: true,
                    enumerable: true,
                    writable: true,
                });

                const { stack } = new Error();
                if (
                    this.c != null ||
                    !stack?.includes("http") ||
                    !String(this).includes("exports:{}")
                ) {
                    return;
                }

                const assetPath = stack.match(/http.+?(?=:\d+?:\d+?$)/m)?.[0];
                if (!assetPath) return;
                try {
                    const srcRequest = new XMLHttpRequest();
                    srcRequest.open("GET", assetPath, false);
                    srcRequest.send();

                    if (srcRequest.responseText.includes(".DiscordSentry=")) {
                        logger.log(
                            "Disabling Sentry Webpack instance!",
                            "font-weight: bold;",
                            "color: inherit;",
                        );
                        Reflect.deleteProperty(Function.prototype, "d");
                        Reflect.deleteProperty(window, "DiscordSentry");
                        throw new Error("Sentry successfully disabled");
                    }
                } catch (e: any) {
                    if (e.message === "Sentry successfully disabled") throw e;
                }
            },
        });

        Object.defineProperty(window, "DiscordSentry", {
            configurable: true,
            set() {
                Reflect.deleteProperty(Function.prototype, "d");
                Reflect.deleteProperty(window, "DiscordSentry");
            },
        });
    }

    function blockTelemetryNetwork() {
        const isTelemetryUrl = (url: string | undefined) =>
            url &&
            (url.includes("/science") ||
                url.includes("/beaker") ||
                url.includes("/metrics") ||
                url.includes("/sentry_key"));

        const origFetch = window.fetch;
        window.fetch = async function (
            input: RequestInfo | URL,
            init?: RequestInit,
        ) {
            try {
                const url =
                    typeof input === "string"
                        ? input
                        : input instanceof URL
                          ? input.href
                          : (input as Request)?.url;

                if (isTelemetryUrl(url)) {
                    return new Response(JSON.stringify({}), { status: 200 });
                }
            } catch (_e) {}
            return origFetch.call(this, input, init);
        };

        const origOpen = XMLHttpRequest.prototype.open;
        (XMLHttpRequest.prototype as any).open = function (
            this: XMLHttpRequest,
            ...args: any[]
        ) {
            try {
                const urlObj = args[1];
                const url =
                    typeof urlObj === "string"
                        ? urlObj
                        : urlObj instanceof URL
                          ? urlObj.href
                          : urlObj;

                if (isTelemetryUrl(url)) {
                    (this as any).__kea_blocked = true;
                }
            } catch (_e) {}
            return origOpen.apply(this, args as any);
        };

        const origSend = XMLHttpRequest.prototype.send;
        XMLHttpRequest.prototype.send = function (...args: any[]) {
            if ((this as any).__kea_blocked) {
                Object.defineProperty(this, "readyState", { value: 4 });
                Object.defineProperty(this, "status", { value: 200 });
                Object.defineProperty(this, "responseText", { value: "{}" });
                setTimeout(() => {
                    this.dispatchEvent(new Event("readystatechange"));
                    this.dispatchEvent(new Event("load"));
                }, 0);
                return;
            }
            return origSend.apply(this, args as any);
        };
    }

    // took it from vencord's notrack plugin, credit to them :3
    function registerNoTrackPatches(): void {
        WebpackPatcher.addPatch({
            find: "AnalyticsActionHandlers.handle",
            replacement: {
                match: /\(0,\i\.analyticsTrackingStoreMaker\)/,
                replace: "(()=>{})",
            },
        });

        WebpackPatcher.addPatch({
            find: ".METRICS_V2",
            replacement: [
                {
                    match: /this\._intervalId=/,
                    replace: "this._intervalId=void 0&&",
                },
                {
                    match: /(?:increment|distribution)\(\i(?:,\i)?\){/g,
                    replace: "$&return;",
                },
            ],
        });
        WebpackPatcher.addPatch({
            find: ".BetterDiscord||null!=",
            replacement: {
                match: /(?=let \i=window;)/,
                replace: "return false;",
            },
        });
    }

    async function hookFluxTrack(): Promise<void> {
        const UserStore = (await WebpackFinder.waitForStoreName(
            "UserStore",
        )) as {
            _dispatcher?: {
                subscribe?: (
                    event: string,
                    callback: (event: unknown) => void,
                ) => void;
            };
        };
        const dispatcher = UserStore?._dispatcher;
        if (dispatcher?.subscribe) {
            dispatcher.subscribe("TRACK", (event: unknown) => {
                const record = event as { resolve?: () => void };
                record?.resolve?.();
            });
        }
    }

    killSentry();
    blockTelemetryNetwork();
    registerNoTrackPatches();
    ExtensionManager.registerAll();

    async function bootKea() {
        logger.log("Booting up...");
        try {
            await SettingsUI.init();
        } catch (e) {
            logger.error("Failed to initialize SettingsUI:", e);
        }
        try {
            await WebpackFinder.init();
            logger.info("Successfully mapped webpack!");
        } catch (e) {
            logger.error("Failed to initialize WebpackFinder:", e);
        }
        ExtensionManager.init();
        hookFluxTrack().catch(() => {});
    }

    bootKea();
}
