import { defineExtension } from "@extensions/types";
import { Logger } from "../../renderer/utils/logger";

const logger = new Logger("exampleExtension", "#10b981");

export const exampleExtension = defineExtension({
	name: "Example Extension",
	description: "Example extension to get you started with making your own extensions!",
	authors: ["your_name"],
	enabledByDefault: false,
	start() {
		logger.log("Example extension enabled");
	},
	stop() {
		logger.log("Example extension disabled");
	},
});
