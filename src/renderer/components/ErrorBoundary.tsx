import { Logger } from "../utils/logger";
import { getReact } from "./utils";

const logger = new Logger("ErrorBoundary", "#ef4444");

export interface ErrorBoundaryProps {
    children?: React.ReactNode;
    fallback?: React.ReactNode;
    noop?: boolean;
}

export interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

export function ErrorBoundary({
    children,
    fallback,
    noop = false,
}: ErrorBoundaryProps): any {
    const React = getReact();
    const [state, setState] = React.useState<ErrorBoundaryState>({
        hasError: false,
        error: null,
    });

    React.useEffect(() => {
        if (state.hasError && state.error) {
            logger.error("Caught component render error:", state.error);
        }
    }, [state]);

    if (state.hasError) {
        if (noop) return null;
        if (fallback) return fallback;

        return React.createElement(
            "div",
            {
                style: {
                    padding: "12px 16px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(239, 68, 68, 0.1)",
                    border: "1px solid #ef4444",
                    color: "#f87e7a",
                    fontFamily: "var(--font-primary, sans-serif)",
                    fontSize: "14px",
                },
            },
            "An error occurred while rendering this component.",
        );
    }

    try {
        return children;
    } catch (err) {
        setState({
            hasError: true,
            error: err instanceof Error ? err : new Error(String(err)),
        });
        return null;
    }
}

export function wrapErrorBoundary<P extends object>(
    Component: React.ComponentType<P>,
    options?: { noop?: boolean; fallback?: React.ReactNode },
): React.ComponentType<P> {
    const React = getReact();
    return function WrappedComponent(props: P) {
        return React.createElement(
            ErrorBoundary,
            options,
            React.createElement(Component, props),
        );
    };
}
