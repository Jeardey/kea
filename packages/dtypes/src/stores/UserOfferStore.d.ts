// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: UserOfferStore

export interface UserOfferStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    canFractionalPremiumUserUseOffer(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    forceReset(...args: any[]): any;
    getAcknowledgedOffers(...args: any[]): any;
    getAlmostExpiringDiscountOffersForReminder(...args: any[]): any;
    getAlmostExpiringTrialOffersForReminder(...args: any[]): any;
    getAnyOfUserTrialOfferId(...args: any[]): any;
    getReferrer(...args: any[]): any;
    getState(...args: any[]): any;
    getUnacknowledgedDiscountOffers(...args: any[]): any;
    getUnacknowledgedOffers(...args: any[]): any;
    getUserDiscountOffer(...args: any[]): any;
    getUserTrialOffer(...args: any[]): any;
    hasAnyUnexpiredDiscountOffer(...args: any[]): any;
    hasAnyUnexpiredOffer(...args: any[]): any;
    hasFetchedOffer(...args: any[]): any;
    initialize(...args: any[]): any;
    isFetchingOffer(...args: any[]): any;
    lastFetchSuccessful(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldFetchReferralOffer(...args: any[]): any;
    shouldShowDiscountOfferReminder(...args: any[]): any;
    shouldShowTrialOfferReminder(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const UserOfferStore: UserOfferStore;
