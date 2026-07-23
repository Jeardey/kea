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
]);
