import { runInstall } from "./core";

runInstall(console.log).catch((error) => {
	console.error(`[installer] ${error instanceof Error ? error.message : String(error)}`);
	process.exitCode = 1;
});
