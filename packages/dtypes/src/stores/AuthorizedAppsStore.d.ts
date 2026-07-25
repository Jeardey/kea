// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: AuthorizedAppsStore

export interface AuthorizedAppsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getApplicationFetchStateVersion(...args: any[]): any;
    getFetchState(...args: any[]): any;
    getFetchStateForApplication(...args: any[]): any;
    getNewestTokenForApplication(...args: any[]): any;
    getNewestTokens(...args: any[]): any;
    getNewestTokensForNonChildrenApplications(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const AuthorizedAppsStore: AuthorizedAppsStore;
