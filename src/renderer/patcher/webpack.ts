export interface WebpackPatchReplacement {
    match: string | RegExp;
    replace: string | ((match: string, ...groups: any[]) => string);
}

export interface WebpackPatch {
    find: string | RegExp;
    replacement: WebpackPatchReplacement | WebpackPatchReplacement[];
}

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

    public static processChunkModules(
        modules: Record<string | number, (...args: any[]) => any>,
    ): void {
        if (!modules) return;

        for (const id in modules) {
            const originalFn = modules[id];
            if (!originalFn) continue;

            const rawCode = originalFn.toString();
            let code = WebpackPatcher.sanitizeFactoryCode(rawCode);
            let isModified = false;

            for (const patch of WebpackPatcher.patches) {
                const matchesFind =
                    typeof patch.find === "string"
                        ? code.includes(patch.find)
                        : patch.find.test(code);

                if (matchesFind) {
                    const replacements = Array.isArray(patch.replacement)
                        ? patch.replacement
                        : [patch.replacement];

                    for (const replacement of replacements) {
                        const matcher = WebpackPatcher.canonicalizeMatch(
                            replacement.match,
                        );
                        const newCode = code.replace(
                            matcher,
                            replacement.replace as any,
                        );

                        if (newCode !== code) {
                            code = newCode;
                            isModified = true;
                        }
                    }
                }
            }

            if (isModified) {
                try {
                    // biome-ignore lint/complexity/noCommaOperator: indirect eval preserves global execution context
                    // biome-ignore lint/security/noGlobalEval: required to recompile patched Webpack factory functions
                    const patchedFn = (0, eval)(code);
                    modules[id] = patchedFn;
                    console.log(
                        `%c[kea] successfully patched Webpack module ${id}!`,
                        "color: #10b981; font-weight: bold;",
                    );
                } catch (e) {
                    console.error(`[kea] failed to recompile module ${id}:`, e);
                }
            }
        }
    }
}
