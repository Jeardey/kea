import {
    BaseText,
    Button,
    Card,
    FormSwitch,
    Heading,
    Modal,
    openModal,
    Paragraph,
    TextInput,
} from "../../components";
import { getReact } from "../../components/utils";

function TestModalComponent({ onClose }: { onClose: () => void }) {
    const React = getReact();
    if (!React) return null;

    const [inputValue, setInputValue] = React.useState("");

    return React.createElement(
        Modal,
        {
            onClose,
            title: "Modal Title",
            subtitle: "Modal Subtitle",
            notice: {
                type: "critical",
                message: "Critical Notice",
            },
            input: React.createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "6px",
                    },
                },
                React.createElement(
                    BaseText,
                    {
                        size: "xs",
                        weight: "bold",
                        color: "var(--header-secondary)",
                    },
                    "MODAL INPUT",
                ),
                React.createElement(TextInput, {
                    placeholder: "Type something...",
                    value: inputValue,
                    onChange: setInputValue,
                }),
            ),
            preview: React.createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "4px",
                    },
                },
                React.createElement(
                    BaseText,
                    {
                        size: "xs",
                        weight: "bold",
                        color: "var(--header-secondary)",
                    },
                    "LIVE PREVIEW",
                ),
                React.createElement(
                    BaseText,
                    { size: "sm", color: "var(--text-normal)" },
                    inputValue || "Type above to update this preview...",
                ),
            ),
            actionBarInput: React.createElement(
                BaseText,
                { size: "sm", color: "var(--text-muted)" },
                "Action Bar Input",
            ),
            actions: [
                {
                    text: "Action Primary",
                    variant: "primary",
                    onClick: () => {
                        console.log("[kea] saved:", inputValue);
                        onClose();
                    },
                },
                {
                    text: "Action Danger",
                    variant: "critical-primary",
                    onClick: () => {
                        console.log("[kea] cancelled");
                        onClose();
                    },
                },
            ],
        },
        React.createElement(
            Paragraph,
            null,
            "test",
        ),
    );
}

export function KeaSettingsPanel(): any {
    const React = getReact();
    if (!React) return null;

    const [blockTelemetry, setBlockTelemetry] = React.useState(true);
    const [developerMode, setDeveloperMode] = React.useState(true);

    return React.createElement(
        "div",
        {
            style: {
                paddingTop: "20px",
                paddingBottom: "80px",
                paddingLeft: "3px",
                paddingRight: "0px",
                maxWidth: "660px",
                boxSizing: "border-box",
                width: "100%",
            },
        },

        // page title & subtitle
        React.createElement(
            Heading,
            {
                level: 1,
                style: {
                    fontSize: "24px",
                    fontWeight: "600",
                    marginBottom: "4px",
                    color: "var(--header-primary, #ffffff)",
                },
            },
            "Kea",
        ),
        React.createElement(
            Paragraph,
            {
                style: {
                    marginBottom: "28px",
                    color: "var(--header-secondary, #b5bac1)",
                    fontSize: "14px",
                },
            },
            "test :3",
        ),

        // info card
        React.createElement(
            Card,
            { variant: "info", style: { marginBottom: "32px" } },
            React.createElement(
                Heading,
                { level: 3, style: { fontSize: "16px", marginBottom: "4px" } },
                "native components",
            ),
            React.createElement(
                Paragraph,
                null,
                "yea",
            ),
        ),

        // test category
        React.createElement(
            "div",
            { style: { marginBottom: "32px" } },
            React.createElement(
                Heading,
                {
                    level: 2,
                    style: {
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "var(--header-primary, #ffffff)",
                        marginBottom: "16px",
                    },
                },
                "test",
            ),
            React.createElement(
                Card,
                { variant: "normal", style: { padding: "12px 16px" } },
                React.createElement(FormSwitch, {
                    title: "block telemetry",
                    description:
                        "blocks discord's telemetry endpoints",
                    value: blockTelemetry,
                    onChange: setBlockTelemetry,
                    style: { padding: 0 },
                }),
            ),
        ),

        // devtools
        React.createElement(
            "div",
            { style: { marginBottom: "32px" } },
            React.createElement(
                Heading,
                {
                    level: 2,
                    style: {
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "var(--header-primary, #ffffff)",
                        marginBottom: "16px",
                    },
                },
                "Developer Tools",
            ),
            React.createElement(
                Card,
                {
                    variant: "normal",
                    style: { padding: "12px 16px", marginBottom: "16px" },
                },
                React.createElement(FormSwitch, {
                    title: "devtools",
                    description:
                        "wut",
                    value: developerMode,
                    onChange: setDeveloperMode,
                    style: { padding: 0 },
                }),
            ),
            // action buttons
            React.createElement(
                "div",
                {
                    style: {
                        display: "flex",
                        gap: "12px",
                        flexWrap: "wrap",
                    },
                },
                React.createElement(
                    Button,
                    {
                        variant: "primary",
                        onClick: () => {
                            if ((window as any).Kea?.MappingGenerator) {
                                (
                                    window as any
                                ).Kea.MappingGenerator.downloadTypeDefinitions();
                            } else {
                                console.warn(
                                    "[kea] MappingGenerator not loaded yet",
                                );
                            }
                        },
                    },
                    "Download Discord Types (.d.ts)",
                ),
                React.createElement(
                    Button,
                    {
                        variant: "secondary",
                        onClick: () => {
                            openModal(({ onClose }) =>
                                React.createElement(TestModalComponent, {
                                    onClose,
                                }),
                            );
                        },
                    },
                    "Test Modal UI",
                ),
            ),
        ),
    );
}
