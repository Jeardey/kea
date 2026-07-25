// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SubscriptionStore

export interface SubscriptionStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActiveApplicationSubscriptions(...args: any[]): any;
    getActiveGuildSubscriptions(...args: any[]): any;
    getIsFetchingMostRecentSubscription(...args: any[]): any;
    getIsFetchingSubscriptionRewardEligibility(...args: any[]): any;
    getIsSubscriptionEligibleForReward(...args: any[]): any;
    getLastLazyPerkSync(...args: any[]): any;
    getMostRecentPremiumTypeSubscription(...args: any[]): any;
    getPremiumGroupSubscription(...args: any[]): any;
    getPremiumSubscription(...args: any[]): any;
    getPremiumTypeSubscription(...args: any[]): any;
    getPreviousPremiumTypeSubscription(...args: any[]): any;
    getSubscriptionById(...args: any[]): any;
    getSubscriptionForPlanIds(...args: any[]): any;
    getSubscriptions(...args: any[]): any;
    hasFetchedMostRecentPremiumTypeSubscription(...args: any[]): any;
    hasFetchedPreviousPremiumTypeSubscription(...args: any[]): any;
    hasFetchedSubscriptions(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const SubscriptionStore: SubscriptionStore;
