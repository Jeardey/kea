// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PromotionsStore

export interface PromotionsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    bogoPromotion: any;
    callback(...args: any[]): any;
    claimedOutboundPromotionCodes: any[];
    claimedOutboundPromotionCodesLoaded: boolean;
    consumedInboundPromotionId: any;
    doEmitChanges(...args: any[]): any;
    getActiveBogoRewardPromotion(...args: any[]): any;
    getGiftPromotion(...args: any[]): any;
    getGiftPromotionRewardSkuIds(...args: any[]): any;
    getMarketingComponentByType(...args: any[]): any;
    getMarketingMomentPromotion(...args: any[]): any;
    getMarketingMomentRewardSkuIds(...args: any[]): any;
    getPromotionByTypeAndId(...args: any[]): any;
    getPromotionByTypeAndKey(...args: any[]): any;
    getPromotionsByPartner(...args: any[]): any;
    getState(...args: any[]): any;
    hasFetchedConsumedInboundPromotionId: boolean;
    hasPromotion(...args: any[]): any;
    initialize(...args: any[]): any;
    isFetchingActiveBogoPromotion: boolean;
    isFetchingActivePromotions: boolean;
    lastDismissedOutboundPromotionStartDate: any;
    lastFetchedActiveBogoPromotion: any;
    lastFetchedActivePromotions: number;
    lastFetchedActivePromotionsLocale: string;
    lastSeenOutboundPromotionStartDate: any;
    outboundPromotions: any[];
    outboundRecurringPromotions: any[];
    promotionsByType: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const PromotionsStore: PromotionsStore;
