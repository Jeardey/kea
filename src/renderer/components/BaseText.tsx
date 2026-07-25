import { getReact } from "./utils";

export interface BaseTextProps {
    tag?: "div" | "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    weight?: "normal" | "medium" | "semibold" | "bold";
    color?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    className?: string;
}

const sizeMap = {
    xs: "12px",
    sm: "14px",
    md: "16px",
    lg: "20px",
    xl: "24px",
};

const weightMap = {
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
};

export function BaseText({
    tag = "div",
    size = "md",
    weight = "normal",
    color = "var(--text-normal, #dbdee1)",
    style,
    children,
    ...props
}: BaseTextProps): any {
    const React = getReact();
    return React.createElement(
        tag,
        {
            style: {
                fontFamily: "var(--font-primary, sans-serif)",
                fontSize: sizeMap[size],
                fontWeight: weightMap[weight],
                color,
                margin: 0,
                lineHeight: 1.3,
                ...style,
            },
            ...props,
        },
        children,
    );
}

export function Heading({
    level = 2,
    children,
    style,
    ...props
}: {
    level?: 1 | 2 | 3 | 4 | 5;
    children?: React.ReactNode;
    style?: React.CSSProperties;
}) {
    const React = getReact();
    const size = level === 1 ? "xl" : level === 2 ? "lg" : "md";
    return React.createElement(
        BaseText,
        {
            tag: `h${level}` as any,
            size,
            weight: "bold",
            color: "var(--header-primary, #ffffff)",
            style: { marginBottom: "8px", ...style },
            ...props,
        },
        children,
    );
}

export function Paragraph(props: Omit<BaseTextProps, "tag">) {
    return getReact().createElement(BaseText, {
        tag: "p",
        size: "sm",
        ...props,
    });
}
