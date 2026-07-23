// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: DeviceFrecencyStore

export interface DeviceFrecencyStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getDeviceIdsSortedByFrecency(...args: any[]): any;
    getState(...args: any[]): any;
    getUsageStats(...args: any[]): any;
    initialize(...args: any[]): any;
    isSampling(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    reset(...args: any[]): any;
    startSampling(...args: any[]): any;
    stopSampling(...args: any[]): any;
    throttledCallback(...args: any[]): any;
    track(...args: any[]): any;
}

export declare const DeviceFrecencyStore: DeviceFrecencyStore;
