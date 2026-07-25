import * as fs from "node:fs";
import * as path from "node:path";
import { app, session } from "electron";
import { Logger } from "../renderer/utils/logger";

const logger = new Logger("Inject", "#10b981");

logger.info("Main process injector loaded!");

app.once("ready", () => {
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        const responseHeaders = Object.assign({}, details.responseHeaders);
        if (responseHeaders["content-security-policy"])
            delete responseHeaders["content-security-policy"];
        if (responseHeaders["Content-Security-Policy"])
            delete responseHeaders["Content-Security-Policy"];
        callback({ cancel: false, responseHeaders });
    });
});

app.on("browser-window-created", (_e, win) => {
    const rendererPath = path.join(__dirname, "kea-renderer.js");

    if (fs.existsSync(rendererPath)) {
        const rendererScript = fs.readFileSync(rendererPath, "utf-8");

        win.webContents.on("did-start-navigation", () => {
            win.webContents.executeJavaScript(rendererScript).catch(() => {});
        });
    } else {
        logger.error("Could not find kea-renderer.js at", rendererPath);
    }
});

const basePath = path.join((process as any).resourcesPath, "_app.asar");
require(basePath);
