import type { WebpackPatch } from "../renderer/patcher/webpack";

export interface ExtensionSettingDef {
    type: "boolean" | "string" | "number";
    name: string;
    description: string;
    default: boolean | string | number;
}

export interface Extension {
    name: string;
    description: string;
    authors: string[];
    enabledByDefault?: boolean;
    patches?: WebpackPatch[];
    start?: () => void;
    stop?: () => void;
    settings?: Record<string, ExtensionSettingDef>;
}

export function defineExtension(extension: Extension): Extension {
    return extension;
}
