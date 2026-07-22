import { app, session } from "electron";
import * as path from "node:path";
import * as fs from "node:fs";

console.log("[kea] main process injector loaded");

app.once("ready", () => {
    // remove CSP
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        const responseHeaders = Object.assign({}, details.responseHeaders);
        if (responseHeaders["content-security-policy"]) delete responseHeaders["content-security-policy"];
        if (responseHeaders["Content-Security-Policy"]) delete responseHeaders["Content-Security-Policy"];
        callback({ cancel: false, responseHeaders });
    });

    // TODO: block more telemetry
    session.defaultSession.webRequest.onBeforeRequest(
        { urls: ["https://*.sentry.io/*", "https://discord.com/api/*/science"] },
        (details, callback) => {
            callback({ cancel: true });
        }
    );
});

// inject
app.on("browser-window-created", (e, win) => {
    const rendererPath = path.join(__dirname, "kea-renderer.js");

    if (fs.existsSync(rendererPath)) {
        const rendererScript = fs.readFileSync(rendererPath, "utf-8");

        win.webContents.on("dom-ready", () => {
            win.webContents.executeJavaScript(rendererScript).catch(console.error);
        });
    } else {
        console.error("[kea] could not find kea-renderer.js at", rendererPath);
    }
});

// load original app.asar
const basePath = path.join((process as any).resourcesPath, "_app.asar");
require(basePath);
