// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SubscriptionPlanStore

export interface SubscriptionPlanStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    get(...args: any[]): any;
    getFetchedSKUIDs(...args: any[]): any;
    getForSKU(...args: any[]): any;
    getForSkuAndInterval(...args: any[]): any;
    getPaymentSourceIds(...args: any[]): any;
    getPaymentSourcesForPlanId(...args: any[]): any;
    getPlanIdsForSkus(...args: any[]): any;
    hasPaymentSourceForSKUId(...args: any[]): any;
    hasPaymentSourceForSKUIds(...args: any[]): any;
    ignoreSKUFetch(...args: any[]): any;
    isFetchingForPremiumSKUs(...args: any[]): any;
    isFetchingForSKU(...args: any[]): any;
    isFetchingForSKUs(...args: any[]): any;
    isLoadedForPremiumSKUs(...args: any[]): any;
    isLoadedForSKU(...args: any[]): any;
    isLoadedForSKUs(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const SubscriptionPlanStore: SubscriptionPlanStore;
