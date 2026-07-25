import { Logger } from "../utils/logger";

const logger = new Logger("WebpackPatcher", "#10b981");

export interface WebpackPatchReplacement {
    match: string | RegExp;
    replace: string | ((match: string, ...groups: string[]) => string);
    noWarn?: boolean;
}

export interface WebpackPatch {
    find: string | RegExp;
    replacement: WebpackPatchReplacement | WebpackPatchReplacement[];
    group?: boolean;
    noWarn?: boolean;
}

type ModuleFactory = (...args: unknown[]) => unknown;

const SYM_ORIGINAL = Symbol("kea_original_factory");
const SYM_PATCHED = Symbol("kea_patched_factory");

export class WebpackPatcher {
    private static patches: WebpackPatch[] = [];

    public static addPatch(patch: WebpackPatch): void {
        WebpackPatcher.patches.push(patch);
    }

    private static sanitizeFactoryCode(originalCode: string): string {
        const isArrow = originalCode.startsWith("(");
        const firstParen = originalCode.indexOf("(");
        if (firstParen === -1) return originalCode;

        return `0,${!isArrow ? "function" : ""}${originalCode.slice(firstParen)}`;
    }

    public static canonicalizeMatch(match: string | RegExp): RegExp {
        const source = typeof match === "string" ? match : match.source;
        const flags = typeof match === "string" ? "g" : match.flags;
        const canonSource = source.replace(/\\i/g, "(?:[A-Za-z_$][\\w$]*)");
        return new RegExp(canonSource, flags);
    }

    private static patchFactory(
        id: string | number,
        originalFn: ModuleFactory,
    ): ModuleFactory {
        const rawCode = originalFn.toString();
        let code = WebpackPatcher.sanitizeFactoryCode(rawCode);
        const initialCode = code;
        let isModified = false;

        for (const patch of WebpackPatcher.patches) {
            let matchesFind = false;
            if (typeof patch.find === "string") {
                matchesFind = code.includes(patch.find);
            } else {
                if (patch.find.global) {
                    patch.find.lastIndex = 0;
                }
                matchesFind = patch.find.test(code);
            }

            if (!matchesFind) continue;

            const replacements = Array.isArray(patch.replacement)
                ? patch.replacement
                : [patch.replacement];

            const previousCode = code;
            let groupFailed = false;

            for (const replacement of replacements) {
                const matcher = WebpackPatcher.canonicalizeMatch(
                    replacement.match,
                );
                const newCode = code.replace(
                    matcher,
                    replacement.replace as (match: string) => string,
                );

                if (newCode === code) {
                    if (!patch.noWarn && !replacement.noWarn) {
                        logger.warn(
                            `Patch had no effect on module ${id}:`,
                            replacement.match,
                        );
                    }
                    if (patch.group) {
                        groupFailed = true;
                        break;
                    }
                } else {
                    code = newCode;
                    isModified = true;
                }
            }

            if (groupFailed) {
                logger.warn(
                    `Rolling back patch group for module ${id} due to failed replacement`,
                );
                code = previousCode;
                isModified = previousCode !== initialCode;
            }
        }

        if (!isModified) {
            return originalFn;
        }

        try {
            // biome-ignore lint/complexity/noCommaOperator: indirect eval preserves global execution context
            // biome-ignore lint/security/noGlobalEval: required to recompile patched Webpack factory functions
            const patchedFn = (0, eval)(code) as ModuleFactory;
            logger.info(`Successfully patched Webpack module ${id}!`);
            return patchedFn;
        } catch (e) {
            logger.error(`Failed to recompile patched module ${id}:`, e);
            return originalFn;
        }
    }

    public static processChunkModules(
        modules: Record<string | number, ModuleFactory>,
    ): void {
        if (!modules) return;

        for (const id in modules) {
            const originalFn = modules[id];
            if (
                !originalFn ||
                (originalFn as unknown as Record<symbol, boolean>)[SYM_PATCHED]
            ) {
                continue;
            }

            let compiledFn: ModuleFactory | null = null;

            const proxyFactory = new Proxy(originalFn, {
                apply(target, thisArg, args) {
                    if (!compiledFn) {
                        compiledFn = WebpackPatcher.patchFactory(id, target);
                        modules[id] = compiledFn;
                    }
                    return compiledFn.apply(thisArg, args);
                },
                get(target, prop, receiver) {
                    if (prop === SYM_ORIGINAL) return target;
                    if (prop === SYM_PATCHED) return true;
                    if (prop === "toString") {
                        return target.toString.bind(target);
                    }
                    return Reflect.get(target, prop, receiver);
                },
            });

            modules[id] = proxyFactory as ModuleFactory;
        }
    }
}
