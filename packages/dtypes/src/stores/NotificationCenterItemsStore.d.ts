// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NotificationCenterItemsStore

export interface NotificationCenterItemsStore {
    active: boolean;
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    cursor: any;
    doEmitChanges(...args: any[]): any;
    errored: boolean;
    getState(...args: any[]): any;
    hasMore: boolean;
    initialize(...args: any[]): any;
    initialized: boolean;
    items: any[];
    loading: boolean;
    localItems: any[];
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    tabFocused: boolean;
    throttledCallback(...args: any[]): any;
}

export declare const NotificationCenterItemsStore: NotificationCenterItemsStore;
