import { getReact } from "./utils";

export type ButtonVariant =
    | "primary"
    | "secondary"
    | "critical-primary"
    | "critical-secondary"
    | "positive"
    | "link"
    | "overlay";

export type ButtonSize = "small" | "medium" | "large" | "iconOnly";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariant;
    size?: ButtonSize;
    children?: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
        backgroundColor: "var(--brand-500, #5865f2)",
        color: "#ffffff",
        border: "none",
    },
    secondary: {
        backgroundColor: "var(--control-secondary-background-default, #4e5058)",
        color: "var(--text-normal, #ffffff)",
        border: "none",
    },
    "critical-primary": {
        backgroundColor: "var(--status-danger, #da373c)",
        color: "#ffffff",
        border: "none",
    },
    "critical-secondary": {
        backgroundColor: "transparent",
        color: "var(--status-danger, #da373c)",
        border: "1px solid var(--status-danger, #da373c)",
    },
    positive: {
        backgroundColor: "var(--status-positive, #23a55a)",
        color: "#ffffff",
        border: "none",
    },
    link: {
        backgroundColor: "transparent",
        color: "var(--text-link, #00a8fc)",
        border: "none",
        padding: 0,
    },
    overlay: {
        backgroundColor: "#ffffff",
        color: "#000000",
        border: "none",
    },
};

const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    small: { padding: "4px 12px", fontSize: "12px", minHeight: "32px" },
    medium: { padding: "8px 16px", fontSize: "14px", minHeight: "38px" },
    large: { padding: "10px 24px", fontSize: "16px", minHeight: "44px" },
    iconOnly: {
        padding: "6px",
        width: "32px",
        height: "32px",
        minHeight: "32px",
    },
};

export function Button({
    variant = "primary",
    size = "medium",
    style,
    children,
    disabled,
    ...props
}: ButtonProps): any {
    const React = getReact();
    return React.createElement(
        "button",
        {
            disabled,
            style: {
                borderRadius: "12px",
                fontWeight: 500,
                fontFamily: "var(--font-primary, sans-serif)",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "6px",
                transition: "background-color 0.17s ease, opacity 0.17s ease",
                ...variantStyles[variant],
                ...sizeStyles[size],
                ...style,
            },
            ...props,
        },
        children,
    );
}
