/** biome-ignore-all lint/complexity/noUselessEscapeInRegex: ; */
import { WebpackPatcher } from "../../patcher/webpack";
import { WebpackFinder } from "../../webpack/finder";
import { ReactComponents } from "../react";
import { KeaSettingsPanel } from "./SettingsPanel";

export function KeaIcon(props: any): any {
    const React =
        ReactComponents.React ||
        (WebpackFinder.findByProps("createElement", "useState") as any) ||
        (window as any).React;

    if (!React) return null;

    return React.createElement(
        "svg",
        {
            width: 20,
            height: 20,
            viewBox: "0 0 24 24",
            fill: "currentColor",
            ...props,
        },
        React.createElement("path", {
            d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
        }),
    );
}

let LayoutTypes = {
    SECTION: 1,
    SIDEBAR_ITEM: 2,
    PANEL: 3,
    CATEGORY: 5,
    CUSTOM: 19,
};

function getReact() {
    return (
        ReactComponents.React ||
        (WebpackFinder.findByProps("createElement", "useState") as any) ||
        (window as any).React
    );
}

function buildEntry(key: string, title: string, Component: any) {
    return {
        key,
        type: LayoutTypes.SIDEBAR_ITEM,
        useTitle: () => title,
        icon: () =>
            getReact()?.createElement(KeaIcon, { width: 20, height: 20 }),
        buildLayout: () => [
            {
                key: `${key}_panel`,
                type: LayoutTypes.PANEL,
                useTitle: () => title,
                buildLayout: () => [
                    {
                        key: `${key}_category`,
                        type: LayoutTypes.CATEGORY,
                        buildLayout: () => [
                            {
                                key: `${key}_custom`,
                                type: LayoutTypes.CUSTOM,
                                Component: Component,
                                element: Component,
                                render: () =>
                                    getReact()?.createElement(Component),
                                StronglyDiscouragedCustomComponent: Component,
                                useSearchTerms: () => [
                                    title,
                                    "kea",
                                    "mod",
                                    "settings",
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    };
}

(window as any).__kea_transformLayout = (layoutBuilder: any) => {
    const layout = layoutBuilder.buildLayout();
    if (layoutBuilder.key !== "$Root" || !Array.isArray(layout)) return layout;

    if (layout.some((s: any) => s?.key === "kea_section")) return layout;

    const keaSection = {
        key: "kea_section",
        type: LayoutTypes.SECTION,
        useTitle: () => "Kea",
        buildLayout: () => [buildEntry("kea_main", "Kea", KeaSettingsPanel)],
    };

    let idx = layout.findIndex((s: any) => s?.key === "billing_section");
    if (idx === -1) idx = 2;

    layout.splice(idx, 0, keaSection);
    return layout;
};

export class SettingsUI {
    public static async init(): Promise<void> {
        await ReactComponents.init();
        const foundLayoutTypes = WebpackFinder.findByProps(
            "SECTION",
            "SIDEBAR_ITEM",
            "CUSTOM",
        );
        if (foundLayoutTypes) {
            Object.assign(LayoutTypes, foundLayoutTypes);
        }
        WebpackPatcher.addPatch({
            find: ".buildLayout().map",
            replacement: {
                match: /(\i)\.buildLayout\(\)/,
                replace: "window.__kea_transformLayout($1)",
            },
        });
        console.log(
            "%c[kea] settings patched",
            "color: #10b981; font-weight: bold;",
        );
    }
}
