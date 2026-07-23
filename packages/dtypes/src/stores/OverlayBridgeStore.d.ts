// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: OverlayBridgeStore

export interface OverlayBridgeStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    DEV_isInputLocked(...args: any[]): any;
    DEV_isInputLockedV3(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    enabled: boolean;
    getAnyGlobalEnabledOverlay(...args: any[]): any;
    getFocusedPID(...args: any[]): any;
    getOverlayPIDStatuses(...args: any[]): any;
    initialize(...args: any[]): any;
    isCrashed(...args: any[]): any;
    isCurrentPidOutOfProcess(...args: any[]): any;
    isFocusedPidInputLocked(...args: any[]): any;
    isFocusedPidOutOfProcess(...args: any[]): any;
    isInputLocked(...args: any[]): any;
    isReady(...args: any[]): any;
    isSupported(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const OverlayBridgeStore: OverlayBridgeStore;
