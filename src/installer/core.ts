import { execSync } from "node:child_process";
import * as fs from "node:fs";
import * as path from "node:path";

export type Logger = (message: string) => void;

// TODO: remove probably this or replace cross-platform
// HACK: WSL fallback for me ~yon
export async function runInstall(log: Logger = console.log): Promise<void> {
	let winLocalData = process.env.LOCALAPPDATA;
	let winAppData = process.env.APPDATA;
	let localData = winLocalData;
	let appData = winAppData;

	if (!winLocalData || !winAppData) {
		try {
			log("[installer] fetching windows environment variables via cmd.exe...");
			winLocalData = execSync("cmd.exe /c echo %LOCALAPPDATA%").toString().trim().replace(/\r/g, "");
			winAppData = execSync("cmd.exe /c echo %APPDATA%").toString().trim().replace(/\r/g, "");

			// convert windows paths to WSL paths for nodejs `fs` shit
			const toWslPath = (winPath: string) => {
				const drive = winPath.charAt(0).toLowerCase();
				return `/mnt/${drive}/${winPath.slice(3).replace(/\\/g, "/")}`;
			};

			localData = toWslPath(winLocalData);
			appData = toWslPath(winAppData);
		} catch (_e) {
			log("[installer] could not fetch windows env vars, r u on linux natively?");
		}
	}

	if (!localData || !appData || !winAppData || !winLocalData) {
		throw new Error("environment folders not found");
	}

	// use WSL paths
	const keaDir = path.join(appData, "Kea", "dist");
	fs.mkdirSync(keaDir, { recursive: true });

	function findDistAsset(filename: string): string {
		const searchPaths = [
			path.join(__dirname, filename),
			path.join(__dirname, "..", "dist", filename),
			path.join(__dirname, "..", filename),
		];
		for (const p of searchPaths) {
			if (fs.existsSync(p)) return p;
		}
		throw new Error(`Asset not found: ${filename}`);
	}

	// copy the newly bundled kea files to the appdata folder
	const distDir = path.dirname(findDistAsset("inject.js"));
	for (const file of fs.readdirSync(distDir)) {
		const srcPath = path.join(distDir, file);
		if (fs.statSync(srcPath).isFile()) {
			fs.copyFileSync(srcPath, path.join(keaDir, file));
		}
	}
	log(`[installer] successfully copied kea assets to appdata: ${keaDir}`);

	// find discord installation
	const discordDir = path.join(localData, "Discord");
	if (!fs.existsSync(discordDir)) throw new Error("discord installation folder not found");

	const appFolders = fs
		.readdirSync(discordDir)
		.filter((f) => f.startsWith("app-"))
		.sort((a, b) => a.localeCompare(b, undefined, { numeric: true }));

	const latestAppFolder = appFolders.pop();
	if (!latestAppFolder) throw new Error("no discord installations found");

	const resources = path.join(discordDir, latestAppFolder, "resources");
	const appAsar = path.join(resources, "app.asar");
	const backupAsar = path.join(resources, "_app.asar");
	const oldFolder = path.join(resources, "app");

	log(`[installer] found Discord at: ${resources}`);

	if (!fs.existsSync(backupAsar)) {
		if (!fs.existsSync(appAsar)) throw new Error("original app.asar not found");
		fs.renameSync(appAsar, backupAsar);
	}

	if (fs.existsSync(oldFolder)) {
		fs.rmSync(oldFolder, { recursive: true, force: true });
	}

	// create the app.asar using the windows path for discord
	const winInjectorPath = `${winAppData}\\Kea\\dist\\inject.js`.replace(/\\/g, "/");
	const indexJs = Buffer.from(`require("${winInjectorPath}");`);
	const pkgJson = Buffer.from(JSON.stringify({ name: "discord", main: "index.js" }));

	const header = JSON.stringify({
		files: {
			"index.js": { size: indexJs.length, offset: "0" },
			"package.json": {
				size: pkgJson.length,
				offset: indexJs.length.toString(),
			},
		},
	});

	const headerJsonBuf = Buffer.from(header, "utf8");
	const padding = (4 - (headerJsonBuf.length % 4)) % 4;
	const paddingBuf = Buffer.alloc(padding);

	const stringSize = headerJsonBuf.length;
	const objectSize = stringSize + padding + 4;
	const headerSize = objectSize + 4;

	const meta = Buffer.alloc(16);
	meta.writeUInt32LE(4, 0);
	meta.writeUInt32LE(headerSize, 4);
	meta.writeUInt32LE(objectSize, 8);
	meta.writeUInt32LE(stringSize, 12);

	const asarBuffer = Buffer.concat([meta, headerJsonBuf, paddingBuf, indexJs, pkgJson]);

	fs.writeFileSync(appAsar, asarBuffer);
	log(`[installer] created loader app.asar (${asarBuffer.length} bytes).`);
}
