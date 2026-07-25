export class Logger {
    constructor(
        public readonly name: string,
        public readonly color: string = "#3b82f6",
    ) {}

    private format(
        levelColor: string,
        levelName: string,
    ): [string, ...string[]] {
        return [
            `%c kea %c %c ${this.name} %c ${levelName}`,
            "background: #3b82f6; color: white; font-weight: bold; border-radius: 4px; padding: 1px 4px;",
            "",
            `background: ${this.color}; color: white; font-weight: bold; border-radius: 4px; padding: 1px 4px;`,
            `color: ${levelColor}; font-weight: bold;`,
        ];
    }

    public log(...args: unknown[]): void {
        console.log(...this.format("#10b981", "LOG"), ...args);
    }

    public info(...args: unknown[]): void {
        console.info(...this.format("#3b82f6", "INFO"), ...args);
    }

    public warn(...args: unknown[]): void {
        console.warn(...this.format("#f59e0b", "WARN"), ...args);
    }

    public error(...args: unknown[]): void {
        console.error(...this.format("#ef4444", "ERROR"), ...args);
    }

    public debug(...args: unknown[]): void {
        console.debug(...this.format("#8b5cf6", "DEBUG"), ...args);
    }
}
