import * as path from "node:path";
import { app, BrowserWindow, ipcMain } from "electron";
import { runInstall } from "../core";

let mainWindow: BrowserWindow | null = null;

function createWindow(): void {
	mainWindow = new BrowserWindow({
		width: 640,
		height: 520,
		resizable: false,
		title: "Kea Installer",
		backgroundColor: "#161616",
		webPreferences: {
			preload: path.join(__dirname, "preload.js"),
			contextIsolation: true,
			nodeIntegration: false,
			sandbox: true,
		},
	});

	mainWindow.setMenuBarVisibility(false);
	mainWindow.loadFile(path.join(__dirname, "index.html"));
}

ipcMain.handle("install:run", async (event) => {
	const sender = event.sender;
	try {
		await runInstall((message) => {
			if (!sender.isDestroyed()) sender.send("install:log", message);
		});
		return { ok: true as const };
	} catch (error) {
		return {
			ok: false as const,
			error: error instanceof Error ? error.message : String(error),
		};
	}
});

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
	app.quit();
});
