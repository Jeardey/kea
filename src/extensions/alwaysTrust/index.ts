import { defineExtension } from "@extensions/types";
import { Logger } from "../../renderer/utils/logger";

const logger = new Logger("AlwaysTrust", "#ef4444");

// NOTE: these patches target function/identifier names inside Discord's obfuscated
// client bundle. Discord ships new builds constantly, so these anchors can drift.
// If this extension stops working, open devtools, check the console for a
// "[WebpackPatcher] Patch had no effect on module ..." warning (patches fail closed,
// they never crash the client), then use `WebpackFinder` to locate the renamed
// function/module and update the `find`/`match` values below.
export const alwaysTrust = defineExtension({
	name: "AlwaysTrust",
	description: "Removes the annoying untrusted domain and suspicious file popup",
	authors: ["Jeardey"],
	enabledByDefault: false,
	patches: [
		{
			// "Not a trusted domain? / This link is taking you to ..." link warning modal
			find: ".isTrustedDomain(",
			replacement: {
				match: /isTrustedDomain\(\i\){/,
				replace: (match) => `${match}return true;`,
			},
		},
		{
			// "This file may be dangerous" suspicious attachment/file warning modal
			find: "isFileNameSuspicious",
			replacement: {
				match: /isFileNameSuspicious\(\i\){/,
				replace: (match) => `${match}return false;`,
			},
		},
	],
	start() {
		logger.log("AlwaysTrust enabled: untrusted domain and suspicious file popups suppressed");
	},
	stop() {
		logger.log("AlwaysTrust disabled: untrusted domain and suspicious file popups restored");
	},
});
