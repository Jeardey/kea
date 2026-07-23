// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PoggermodeSettingsStore

export interface PoggermodeSettingsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    combosEnabled: boolean;
    comboSoundsEnabled: boolean;
    combosRequiredCount: number;
    doEmitChanges(...args: any[]): any;
    getUserAgnosticState(...args: any[]): any;
    initialize(...args: any[]): any;
    isEnabled(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    screenshakeEnabled: boolean;
    screenshakeEnabledLocations: any;
    settingsVisible: boolean;
    shakeIntensity: number;
    throttledCallback(...args: any[]): any;
}

export declare const PoggermodeSettingsStore: PoggermodeSettingsStore;
