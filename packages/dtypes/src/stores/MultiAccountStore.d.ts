// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: MultiAccountStore

export interface MultiAccountStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    canUseMultiAccountNotifications: boolean;
    doEmitChanges(...args: any[]): any;
    getCanUseMultiAccountMobile(...args: any[]): any;
    getHasLoggedInAccounts(...args: any[]): any;
    getIsValidatingUsers(...args: any[]): any;
    getState(...args: any[]): any;
    getUsers(...args: any[]): any;
    getValidUsers(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const MultiAccountStore: MultiAccountStore;
