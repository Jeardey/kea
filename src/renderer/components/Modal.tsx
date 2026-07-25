/** biome-ignore-all lint/style/useImportType: idk */
import { BaseText } from "./BaseText";
import { Button, ButtonVariant } from "./Button";
import { Notice, NoticeType } from "./Notice";
import { getReact } from "./utils";

export type ModalSize = "sm" | "md" | "lg" | "xl";

export interface ModalAction {
    text: string;
    variant?: ButtonVariant;
    onClick: () => void;
    disabled?: boolean;
}

export interface ModalProps {
    size?: ModalSize;
    title: React.ReactNode;
    subtitle?: React.ReactNode;
    notice?: {
        type?: NoticeType;
        message: React.ReactNode;
    };
    input?: React.ReactNode;
    children?: React.ReactNode;
    preview?: React.ReactNode;
    actionBarInput?: React.ReactNode;
    actions?: ModalAction[];
    onClose?: () => void;
    style?: React.CSSProperties;
}

const sizeWidths: Record<ModalSize, string> = {
    sm: "440px",
    md: "520px",
    lg: "600px",
    xl: "800px",
};

export function Modal({
    size = "md",
    title,
    subtitle,
    notice,
    input,
    children,
    preview,
    actionBarInput,
    actions = [],
    onClose,
    style,
}: ModalProps): any {
    const React = getReact();

    return React.createElement(
        "div",
        {
            className: "kea-modal-card",
            style: {
                backgroundColor:
                    "var(--modal-background, var(--background-primary, #313338))",
                borderRadius: "12px",
                width: sizeWidths[size],
                maxWidth: "90vw",
                maxHeight: "85vh",
                display: "flex",
                flexDirection: "column",
                boxShadow:
                    "var(--elevation-high, 0 8px 16px rgba(0, 0, 0, 0.24))",
                overflow: "hidden",
                color: "var(--text-normal, #dbdee1)",
                fontFamily: "var(--font-primary, sans-serif)",
                position: "relative",
                ...style,
            },
        },
        React.createElement(
            "div",
            {
                style: {
                    padding: "24px 24px 0 24px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    position: "relative",
                },
            },
            React.createElement(
                BaseText,
                {
                    tag: "h2",
                    size: "lg",
                    weight: "bold",
                    color: "var(--header-primary, #ffffff)",
                },
                title,
            ),
            subtitle &&
                React.createElement(
                    BaseText,
                    { size: "sm", color: "var(--header-secondary, #b5bac1)" },
                    subtitle,
                ),
            onClose &&
                React.createElement(
                    "button",
                    {
                        onClick: onClose,
                        style: {
                            position: "absolute",
                            top: "20px",
                            right: "20px",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            color: "var(--interactive-muted, #b5bac1)",
                            borderRadius: "50%",
                            padding: "6px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            transition:
                                "color 0.15s ease, background-color 0.15s ease",
                        },
                        onMouseEnter: (e: any) => {
                            e.currentTarget.style.color =
                                "var(--interactive-active, #ffffff)";
                            e.currentTarget.style.backgroundColor =
                                "var(--background-modifier-hover, rgba(255,255,255,0.07))";
                        },
                        onMouseLeave: (e: any) => {
                            e.currentTarget.style.color =
                                "var(--interactive-muted, #b5bac1)";
                            e.currentTarget.style.backgroundColor =
                                "transparent";
                        },
                    },
                    React.createElement(
                        "svg",
                        {
                            width: 18,
                            height: 18,
                            viewBox: "0 0 24 24",
                            fill: "currentColor",
                        },
                        React.createElement("path", {
                            d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z",
                        }),
                    ),
                ),
        ),
        React.createElement(
            "div",
            {
                style: {
                    padding: "16px 24px",
                    overflowY: "auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                    flexGrow: 1,
                },
            },
            notice &&
                React.createElement(Notice, {
                    type: notice.type ?? "critical",
                    message: notice.message,
                }),
            input &&
                React.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px",
                        },
                    },
                    input,
                ),
            children &&
                React.createElement(
                    "div",
                    {
                        style: {
                            color: "var(--text-normal, #dbdee1)",
                            fontSize: "14px",
                            lineHeight: 1.5,
                        },
                    },
                    children,
                ),
            preview &&
                React.createElement(
                    "div",
                    {
                        style: {
                            backgroundColor:
                                "var(--background-secondary-alt, var(--background-secondary, #2b2d31))",
                            borderRadius: "8px",
                            padding: "12px 16px",
                            border: "1px solid var(--border-subtle, rgba(255, 255, 255, 0.05))",
                        },
                    },
                    preview,
                ),
        ),
        (actionBarInput || actions.length > 0) &&
            React.createElement(
                "div",
                {
                    style: {
                        backgroundColor:
                            "var(--modal-footer-background, transparent)",
                        padding: "16px 24px 24px 24px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: "12px",
                    },
                },
                React.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                            flexGrow: 1,
                        },
                    },
                    actionBarInput,
                ),
                React.createElement(
                    "div",
                    {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            gap: "12px",
                        },
                    },
                    actions.map((action, index) =>
                        React.createElement(
                            Button,
                            {
                                key: index,
                                variant: action.variant ?? "primary",
                                disabled: action.disabled,
                                onClick: action.onClick,
                            },
                            action.text,
                        ),
                    ),
                ),
            ),
    );
}
