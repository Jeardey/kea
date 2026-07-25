import type { Extension } from "@extensions/types";
import { WebpackPatcher } from "../renderer/patcher/webpack";

declare global {
    interface ImportMeta {
        glob<T = Record<string, unknown>>(
            pattern: string,
            options?: { eager?: boolean },
        ): Record<string, T>;
    }
}

const STORAGE_KEY = "kea_extensions";

const extensionModules = import.meta.glob<Record<string, unknown>>(
    "./*/index.{ts,tsx}",
    { eager: true },
);

function isExtension(obj: unknown): obj is Extension {
    if (typeof obj !== "object" || obj === null) return false;
    const candidate = obj as Record<string, unknown>;
    return (
        typeof candidate.name === "string" &&
        typeof candidate.description === "string"
    );
}

export class ExtensionManager {
    public static extensions = new Map<string, Extension>();
    private static activeExtensions = new Set<string>();

    private static loadSavedState(): Record<string, boolean> {
        try {
            const saved = window.localStorage?.getItem(STORAGE_KEY);
            return saved ? (JSON.parse(saved) as Record<string, boolean>) : {};
        } catch {
            return {};
        }
    }

    private static saveState(states: Record<string, boolean>): void {
        try {
            window.localStorage?.setItem(STORAGE_KEY, JSON.stringify(states));
        } catch {}
    }

    public static register(ext: Extension): void {
        ExtensionManager.extensions.set(ext.name, ext);
        if (ext.patches) {
            for (const patch of ext.patches) {
                WebpackPatcher.addPatch(patch);
            }
        }
    }

    public static registerAll(): void {
        for (const moduleExports of Object.values(extensionModules)) {
            if (typeof moduleExports !== "object" || moduleExports === null)
                continue;
            for (const exportedValue of Object.values(moduleExports)) {
                if (
                    isExtension(exportedValue) &&
                    !ExtensionManager.extensions.has(exportedValue.name)
                ) {
                    ExtensionManager.register(exportedValue);
                }
            }
        }
    }

    public static init(): void {
        const states = ExtensionManager.loadSavedState();

        for (const [name, ext] of ExtensionManager.extensions) {
            const isEnabled = states[name] ?? ext.enabledByDefault ?? false;
            if (isEnabled) {
                ExtensionManager.enable(name, false);
            }
        }
    }

    public static isEnabled(name: string): boolean {
        return ExtensionManager.activeExtensions.has(name);
    }

    public static enable(name: string, save = true): void {
        const ext = ExtensionManager.extensions.get(name);
        if (!ext || ExtensionManager.activeExtensions.has(name)) return;

        ExtensionManager.activeExtensions.add(name);
        ext.start?.();

        if (save) {
            const states = ExtensionManager.loadSavedState();
            states[name] = true;
            ExtensionManager.saveState(states);
        }
    }

    public static disable(name: string, save = true): void {
        const ext = ExtensionManager.extensions.get(name);
        if (!ext || !ExtensionManager.activeExtensions.has(name)) return;

        ExtensionManager.activeExtensions.delete(name);
        ext.stop?.();

        if (save) {
            const states = ExtensionManager.loadSavedState();
            states[name] = false;
            ExtensionManager.saveState(states);
        }
    }

    public static toggle(name: string): void {
        if (ExtensionManager.isEnabled(name)) {
            ExtensionManager.disable(name);
        } else {
            ExtensionManager.enable(name);
        }
    }
}
