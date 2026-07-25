// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ApplicationStore

export interface ApplicationStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    didFetchingApplicationFail(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAppIdForBotUserId(...args: any[]): any;
    getApplication(...args: any[]): any;
    getApplicationByName(...args: any[]): any;
    getApplicationLastUpdated(...args: any[]): any;
    getFetchingOrFailedFetchingIds(...args: any[]): any;
    getGuildApplication(...args: any[]): any;
    getGuildApplicationIds(...args: any[]): any;
    getState(...args: any[]): any;
    initialize(...args: any[]): any;
    isFetchingApplication(...args: any[]): any;
    isHydrated(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const ApplicationStore: ApplicationStore;
