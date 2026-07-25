const installButton = document.getElementById("install-button") as HTMLButtonElement;
const logEl = document.getElementById("log") as HTMLPreElement;
const statusEl = document.getElementById("status") as HTMLDivElement;

function appendLog(message: string): void {
	logEl.textContent += `${message}\n`;
	logEl.scrollTop = logEl.scrollHeight;
}

function setStatus(text: string, kind: "idle" | "running" | "success" | "error"): void {
	statusEl.textContent = text;
	statusEl.className = `status status-${kind}`;
}

window.kea.onLog(appendLog);

installButton.addEventListener("click", async () => {
	installButton.disabled = true;
	logEl.textContent = "";
	setStatus("Installing...", "running");

	const result = await window.kea.install();

	if (result.ok) {
		setStatus("Kea installed successfully!", "success");
	} else {
		setStatus(`Install failed: ${result.error ?? "unknown error"}`, "error");
	}

	installButton.disabled = false;
});
