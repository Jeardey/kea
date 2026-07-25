import { BaseText } from "./BaseText";
import { getReact } from "./utils";

export type NoticeType = "critical" | "warning" | "info" | "success";

export interface NoticeProps {
    type?: NoticeType;
    message: React.ReactNode;
    style?: React.CSSProperties;
}

const noticeColors: Record<
    NoticeType,
    { border: string; bg: string; iconColor: string }
> = {
    critical: {
        border: "#f87e7a",
        bg: "rgba(248, 126, 122, 0.1)",
        iconColor: "#f87e7a",
    },
    warning: {
        border: "var(--status-warning, #f0b232)",
        bg: "rgba(240, 178, 50, 0.1)",
        iconColor: "var(--status-warning, #f0b232)",
    },
    info: {
        border: "var(--brand-500, #5865f2)",
        bg: "rgba(88, 101, 242, 0.1)",
        iconColor: "var(--brand-500, #5865f2)",
    },
    success: {
        border: "var(--status-positive, #23a55a)",
        bg: "rgba(35, 165, 90, 0.1)",
        iconColor: "var(--status-positive, #23a55a)",
    },
};

function ExclamationIcon({ color }: { color: string }): any {
    const React = getReact();
    return React.createElement(
        "svg",
        {
            width: 24,
            height: 24,
            viewBox: "0 0 24 24",
            style: { flexShrink: 0 },
        },
        React.createElement("circle", { cx: 12, cy: 12, r: 10, fill: color }),
        React.createElement("path", {
            d: "M12 7v6m0 4h.01",
            stroke: "#ffffff",
            strokeWidth: 2,
            strokeLinecap: "round",
        }),
    );
}

export function Notice({
    type = "critical",
    message,
    style,
}: NoticeProps): any {
    const React = getReact();
    const colors = noticeColors[type];

    return React.createElement(
        "div",
        {
            style: {
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "12px 16px",
                borderRadius: "8px",
                border: `1px solid ${colors.border}`,
                backgroundColor: colors.bg,
                ...style,
            },
        },
        React.createElement(ExclamationIcon, { color: colors.iconColor }),
        React.createElement(
            BaseText,
            {
                size: "sm",
                weight: "medium",
                color: "var(--text-normal, #ffffff)",
            },
            message,
        ),
    );
}
