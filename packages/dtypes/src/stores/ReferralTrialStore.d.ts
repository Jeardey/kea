// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ReferralTrialStore

export interface ReferralTrialStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    checkAndFetchReferralsRemaining(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllRelevantReferralTrialOffers(...args: any[]): any;
    getEligibleUsers(...args: any[]): any;
    getFetchingEligibleUsers(...args: any[]): any;
    getHasEligibleFriends(...args: any[]): any;
    getIsEligibleToSendReferrals(...args: any[]): any;
    getNextIndexOfEligibleUsers(...args: any[]): any;
    getRecipientStatus(...args: any[]): any;
    getReferralsRemaining(...args: any[]): any;
    getRefreshAt(...args: any[]): any;
    getRelevantUserTrialOffer(...args: any[]): any;
    getReminderStateId(...args: any[]): any;
    getSentUserIds(...args: any[]): any;
    initialize(...args: any[]): any;
    isFetchingReferralsRemaining(...args: any[]): any;
    isResolving(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ReferralTrialStore: ReferralTrialStore;
