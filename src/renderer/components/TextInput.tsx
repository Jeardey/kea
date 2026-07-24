import { getReact } from "./utils";

export interface TextInputProps extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "onChange"
> {
    value?: string;
    placeholder?: string;
    onChange?: (value: string) => void;
    error?: string;
    disabled?: boolean;
    style?: React.CSSProperties;
}

export function TextInput({
    value,
    placeholder,
    onChange,
    error,
    disabled,
    style,
    ...props
}: TextInputProps) {
    const React = getReact();

    return React.createElement(
        "div",
        {
            style: {
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                width: "100%",
            },
        },
        React.createElement("input", {
            type: "text",
            value: value ?? "",
            placeholder,
            disabled,
            onChange: (e: any) => onChange?.(e.target.value),
            style: {
                width: "100%",
                boxSizing: "border-box",
                backgroundColor: "var(--input-background, #1e1f22)",
                color: "var(--text-normal, #dbdee1)",
                border: error
                    ? "1px solid var(--status-danger, #f23f43)"
                    : "1px solid transparent",
                borderRadius: "4px",
                padding: "10px 12px",
                fontSize: "14px",
                fontFamily: "var(--font-primary, sans-serif)",
                outline: "none",
                transition:
                    "border-color 0.2s ease, background-color 0.2s ease",
                opacity: disabled ? 0.5 : 1,
                cursor: disabled ? "not-allowed" : "text",
                ...style,
            },
            onFocus: (e: any) => {
                if (!error)
                    e.target.style.borderColor = "var(--brand-500, #5865f2)";
            },
            onBlur: (e: any) => {
                if (!error) e.target.style.borderColor = "transparent";
            },
            ...props,
        }),
        error &&
            React.createElement(
                "span",
                {
                    style: {
                        color: "var(--status-danger, #f23f43)",
                        fontSize: "12px",
                        fontWeight: 500,
                    },
                },
                error,
            ),
    );
}
