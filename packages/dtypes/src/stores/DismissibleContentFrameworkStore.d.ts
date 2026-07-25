// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: DismissibleContentFrameworkStore

export interface DismissibleContentFrameworkStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    dailyCapOverridden: boolean;
    doEmitChanges(...args: any[]): any;
    getRenderedAtTimestamp(...args: any[]): any;
    getState(...args: any[]): any;
    hasUserHitDCCap(...args: any[]): any;
    initialize(...args: any[]): any;
    lastDismissed: any;
    newUserMinAgeRequiredOverridden: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const DismissibleContentFrameworkStore: DismissibleContentFrameworkStore;
