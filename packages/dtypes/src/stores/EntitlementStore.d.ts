// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: EntitlementStore

export interface EntitlementStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    applicationIdsFetched: any;
    applicationIdsFetching: any;
    doEmitChanges(...args: any[]): any;
    fetchedAllEntitlements: boolean;
    fetchedEndedEntitlements: boolean;
    fetchingAllEntitlements: boolean;
    get(...args: any[]): any;
    getForApplication(...args: any[]): any;
    getForSku(...args: any[]): any;
    getForSubscription(...args: any[]): any;
    getFractionalPremium(...args: any[]): any;
    getGiftable(...args: any[]): any;
    getUnactivatedFractionalPremiumUnits(...args: any[]): any;
    hasFetchedForApplicationIds(...args: any[]): any;
    initialize(...args: any[]): any;
    isEntitledToSku(...args: any[]): any;
    isFetchedForApplication(...args: any[]): any;
    isFetchingForApplication(...args: any[]): any;
    isFractionalPremiumActive(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const EntitlementStore: EntitlementStore;
