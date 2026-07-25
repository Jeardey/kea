// tsdown.config.ts
import * as fs from "node:fs";
import * as path from "node:path";
import { defineConfig } from "tsdown";

export default defineConfig([
    {
        entry: { inject: "src/main/inject.ts" },
        format: ["cjs"],
        outExtensions: () => ({ js: ".js" }),
        target: "node16",
        clean: true,
        outDir: "dist",
        deps: {
            neverBundle: ["electron"],
        },
        dts: false,
    },
    {
        entry: { "kea-renderer": "src/renderer/index.ts" },
        format: ["cjs"],
        outExtensions: () => ({ js: ".js" }),
        target: "node16",
        outDir: "dist",
        define: {
            "process.env.NODE_ENV": JSON.stringify("production"),
            "process.env": "{}",
        },
        deps: {
            neverBundle: ["react"],
        },
        dts: false,
    },
    {
        entry: { install: "src/installer/install.ts" },
        format: ["cjs"],
        outExtensions: () => ({ js: ".js" }),
        target: "node16",
        outDir: "dist",
        dts: false,
    },
    {
        entry: {
            "gui/main": "src/installer/gui/main.ts",
            "gui/preload": "src/installer/gui/preload.ts",
        },
        format: ["cjs"],
        outExtensions: () => ({ js: ".js" }),
        target: "node16",
        outDir: "dist",
        deps: {
            neverBundle: ["electron"],
        },
        dts: false,
    },
    {
        entry: { "gui/renderer": "src/installer/gui/renderer.ts" },
        platform: "browser",
        format: ["iife"],
        outExtensions: () => ({ js: ".js" }),
        target: "es2022",
        outDir: "dist",
        dts: false,
        hooks: {
            "build:done": () => {
                const guiSrc = path.join(import.meta.dirname, "src", "installer", "gui");
                const guiDist = path.join(import.meta.dirname, "dist", "gui");
                fs.mkdirSync(guiDist, { recursive: true });
                for (const asset of ["index.html", "style.css"]) {
                    fs.copyFileSync(path.join(guiSrc, asset), path.join(guiDist, asset));
                }
            },
        },
    },
]);
