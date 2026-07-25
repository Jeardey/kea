import { getReact } from "./utils";

export function Divider({
    style,
    ...props
}: React.HTMLAttributes<HTMLHRElement>): any {
    const React = getReact();
    return React.createElement("hr", {
        style: {
            margin: "20px 0",
            border: "none",
            borderTop:
                "1px solid var(--profile-body-border, rgba(255,255,255,0.08))",
            ...style,
        },
        ...props,
    });
}
