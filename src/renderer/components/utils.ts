import { WebpackFinder } from "../webpack/finder";

export function getReact(): typeof import("react") {
    if ((window as any).__kea_react) {
        return (window as any).__kea_react;
    }

    const resolved =
        (window as any).React ||
        (WebpackFinder.findByProps("createElement", "useState") as any) ||
        require("react");

    if (resolved) {
        (window as any).__kea_react = resolved;
    }

    return resolved;
}
