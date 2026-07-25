// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: StreamingCapabilitiesStore

export interface StreamingCapabilitiesStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    canUseHardwareAcceleration: boolean;
    doEmitChanges(...args: any[]): any;
    getState(...args: any[]): any;
    GPUDriversOutdated: boolean;
    initialize(...args: any[]): any;
    problematicGPUDriver: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const StreamingCapabilitiesStore: StreamingCapabilitiesStore;
