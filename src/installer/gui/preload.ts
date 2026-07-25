import { contextBridge, ipcRenderer } from "electron";

export interface InstallResult {
	ok: boolean;
	error?: string;
}

contextBridge.exposeInMainWorld("kea", {
	install: (): Promise<InstallResult> => ipcRenderer.invoke("install:run"),
	onLog: (callback: (message: string) => void): void => {
		ipcRenderer.on("install:log", (_event, message: string) => callback(message));
	},
});

declare global {
	interface Window {
		kea: {
			install: () => Promise<InstallResult>;
			onLog: (callback: (message: string) => void) => void;
		};
	}
}
