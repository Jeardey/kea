import { getReact } from "./utils";

export type CardVariant = "normal" | "warning" | "danger" | "info" | "success";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    children?: React.ReactNode;
}

const cardStyles: Record<CardVariant, React.CSSProperties> = {
    normal: {
        backgroundColor: "var(--background-secondary, #2b2d31)",
        border: "1px solid var(--border-subtle, rgba(255,255,255,0.08))",
    },
    warning: {
        backgroundColor: "rgba(240, 178, 50, 0.1)",
        border: "1px solid var(--status-warning, #f0b232)",
    },
    danger: {
        backgroundColor: "rgba(242, 63, 67, 0.1)",
        border: "1px solid var(--status-danger, #f23f43)",
    },
    info: {
        backgroundColor: "rgba(88, 101, 242, 0.1)",
        border: "1px solid var(--brand-500, #5865f2)",
    },
    success: {
        backgroundColor: "rgba(35, 165, 90, 0.1)",
        border: "1px solid var(--status-positive, #23a55a)",
    },
};

export function Card({
    variant = "normal",
    style,
    children,
    ...props
}: CardProps): any {
    const React = getReact();
    return React.createElement(
        "div",
        {
            style: {
                padding: "16px",
                borderRadius: "8px",
                color: "var(--text-normal, #dbdee1)",
                fontFamily: "var(--font-primary, sans-serif)",
                ...cardStyles[variant],
                ...style,
            },
            ...props,
        },
        children,
    );
}
