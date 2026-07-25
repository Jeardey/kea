import { Logger } from "../utils/logger";
import { WebpackFinder } from "../webpack/finder";
import { getReact } from "./utils";

const logger = new Logger("ModalManager", "#10b981");

let modalContainer: HTMLDivElement | null = null;
let activeRoot: any = null;
let isClosing = false;

function ensureAnimationStyles(): void {
    if (document.getElementById("kea-modal-styles")) return;

    const style = document.createElement("style");
    style.id = "kea-modal-styles";
    style.textContent = `
		@keyframes keaBackdropFadeIn {
			from { opacity: 0; }
			to { opacity: 1; }
		}
		@keyframes keaBackdropFadeOut {
			from { opacity: 1; }
			to { opacity: 0; }
		}
		@keyframes keaModalScaleIn {
			0% { opacity: 0; transform: scale(0.7); }
			100% { opacity: 1; transform: scale(1); }
		}
		@keyframes keaModalScaleOut {
			0% { opacity: 1; transform: scale(1); }
			100% { opacity: 0; transform: scale(0.85); }
		}

		#kea-modal-container {
			animation: keaBackdropFadeIn 150ms ease-out forwards;
		}
		#kea-modal-container.kea-closing {
			animation: keaBackdropFadeOut 140ms ease-in forwards !important;
		}

		.kea-modal-card {
			animation: keaModalScaleIn 180ms cubic-bezier(0.175, 0.885, 0.32, 1.1) forwards;
		}
		#kea-modal-container.kea-closing .kea-modal-card {
			animation: keaModalScaleOut 120ms ease-in forwards !important;
		}
	`;
    document.head.appendChild(style);
}

export function openModal(
    renderModal: (props: { onClose: () => void }) => any,
): void {
    const React = getReact();
    if (!React) {
        logger.error("Cannot open modal: React instance not found");
        return;
    }

    ensureAnimationStyles();
    isClosing = false;

    if (!modalContainer) {
        modalContainer = document.createElement("div");
        modalContainer.id = "kea-modal-container";
        Object.assign(modalContainer.style, {
            position: "fixed",
            top: "0",
            left: "0",
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0, 0, 0, 0.75)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "99999",
        });
        document.body.appendChild(modalContainer);
    }

    const handleClose = () => {
        closeModal();
    };

    modalContainer.onclick = (e) => {
        if (e.target === modalContainer) {
            handleClose();
        }
    };

    const element = renderModal({ onClose: handleClose });

    const ReactDOMModule =
        (window as any).ReactDOM ||
        WebpackFinder.findByProps("createRoot") ||
        WebpackFinder.findByProps("render", "createPortal");

    const createRootFn =
        ReactDOMModule?.createRoot || ReactDOMModule?.default?.createRoot;

    if (createRootFn) {
        if (!activeRoot) {
            activeRoot = createRootFn(modalContainer);
        }
        activeRoot.render(element);
    } else if (ReactDOMModule?.render) {
        ReactDOMModule.render(element, modalContainer);
    } else {
        logger.error("Could not find ReactDOM to mount modal");
    }
}

export function closeModal(): void {
    if (!modalContainer || isClosing) return;
    isClosing = true;
    modalContainer.classList.add("kea-closing");

    setTimeout(() => {
        if (activeRoot) {
            try {
                activeRoot.unmount();
            } catch {}
            activeRoot = null;
        }

        if (modalContainer) {
            modalContainer.remove();
            modalContainer = null;
        }
        isClosing = false;
    }, 140);
}
