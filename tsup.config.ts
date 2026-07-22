import { defineConfig } from "tsup";

export default defineConfig({
    entry: {
        inject: "src/main/inject.ts",
        "kea-renderer": "src/renderer/index.ts",
        install: "src/installer/install.ts",
    },
    format: ["cjs"],
    target: "node16",
    clean: true,
    external: ["electron"],
    outDir: "dist",
});
