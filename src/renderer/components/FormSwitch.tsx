import { BaseText } from "./BaseText";
import { Switch } from "./Switch";
import { getReact } from "./utils";

export interface FormSwitchProps {
    title: string;
    description?: string | undefined;
    value: boolean;
    onChange: (value: boolean) => void;
    disabled?: boolean | undefined;
    style?: React.CSSProperties | undefined;
}

export function FormSwitch({
    title,
    description,
    value,
    onChange,
    disabled,
    style,
}: FormSwitchProps): any {
    const React = getReact();

    return React.createElement(
        "div",
        {
            style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "12px 0",
                ...style,
            },
        },
        React.createElement(
            "div",
            {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    gap: "4px",
                    paddingRight: "16px",
                },
            },
            React.createElement(
                BaseText,
                {
                    weight: "semibold",
                    size: "md",
                    color: "var(--header-primary, #ffffff)",
                },
                title,
            ),
            description &&
                React.createElement(
                    BaseText,
                    { size: "sm", color: "var(--header-secondary, #b5bac1)" },
                    description,
                ),
        ),
        React.createElement(Switch, { value, onChange, disabled }),
    );
}
