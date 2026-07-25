import { getReact } from "./utils";

export interface SwitchProps {
    value: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean | undefined;
}

export function Switch({ value, onChange, disabled }: SwitchProps): any {
    const React = getReact();

    return React.createElement(
        "div",
        {
            onClick: () => !disabled && onChange(!value),
            style: {
                width: "42px",
                height: "24px",
                borderRadius: "12px",
                backgroundColor: value
                    ? "var(--brand-500, #5865f2)"
                    : "var(--primary-600, #4e5058)",
                position: "relative",
                cursor: disabled ? "not-allowed" : "pointer",
                opacity: disabled ? 0.5 : 1,
                transition: "background-color 0.2s ease",
                flexShrink: 0,
            },
        },
        React.createElement("div", {
            style: {
                width: "18px",
                height: "18px",
                borderRadius: "50%",
                backgroundColor: "#ffffff",
                position: "absolute",
                top: "3px",
                left: value ? "21px" : "3px",
                transition: "left 0.2s ease",
            },
        }),
    );
}
