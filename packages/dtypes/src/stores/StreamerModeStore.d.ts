// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: StreamerModeStore

export interface StreamerModeStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    autoToggle: boolean;
    callback(...args: any[]): any;
    disableNotifications: boolean;
    disableSounds: boolean;
    doEmitChanges(...args: any[]): any;
    enableContentProtection: boolean;
    enabled: boolean;
    getSettings(...args: any[]): any;
    getState(...args: any[]): any;
    hideInstantInvites: boolean;
    hidePersonalInformation: boolean;
    initialize(...args: any[]): any;
    isOverlayWidgetDisabled(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const StreamerModeStore: StreamerModeStore;
