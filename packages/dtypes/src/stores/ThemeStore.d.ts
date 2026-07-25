// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ThemeStore

export interface ThemeStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getState(...args: any[]): any;
    getSyncedClientTheme(...args: any[]): any;
    initialize(...args: any[]): any;
    isSameAsDeviceThemeEnabled(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    systemTheme: string;
    theme: string;
    themePreferenceForSystemTheme(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const ThemeStore: ThemeStore;
