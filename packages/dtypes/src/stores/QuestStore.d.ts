// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: QuestStore

export interface QuestStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    canRefreshAd(...args: any[]): any;
    claimedQuests: any;
    doEmitChanges(...args: any[]): any;
    earnedQuestForPlacement: any;
    excludedQuests: any;
    getExpiredQuestsMap(...args: any[]): any;
    getFetchQuestPreviewError(...args: any[]): any;
    getLastFetchedQuestHomeHero(...args: any[]): any;
    getOptimisticProgress(...args: any[]): any;
    getQuest(...args: any[]): any;
    getQuestConfig(...args: any[]): any;
    getQuestHomeHero(...args: any[]): any;
    getQuestLoadedViaPreview(...args: any[]): any;
    getQuestPreviewOverride(...args: any[]): any;
    getRewardCode(...args: any[]): any;
    getRewards(...args: any[]): any;
    getStreamHeartbeatFailure(...args: any[]): any;
    isClaimingReward(...args: any[]): any;
    isDismissingContent(...args: any[]): any;
    isEnrolling(...args: any[]): any;
    isFetchingClaimedQuests: boolean;
    isFetchingCurrentQuests: boolean;
    isFetchingEarnedQuestToDeliver: boolean;
    isFetchingEarnedQuestToDeliverByPlacement(...args: any[]): any;
    isFetchingQuestHomeHero(...args: any[]): any;
    isFetchingQuestPreview(...args: any[]): any;
    isFetchingQuestToDeliver: boolean;
    isFetchingQuestToDeliverByPlacement(...args: any[]): any;
    isFetchingRewardCode(...args: any[]): any;
    isProgressingOnDesktop(...args: any[]): any;
    isQuestExpired(...args: any[]): any;
    lastFetchedCurrentQuests: number;
    lastFetchedQuestToDeliver: number;
    questAdDecisionByPlacement: any;
    questEnrollmentBlockedUntil: any;
    quests: any;
    questToDeliverForPlacement: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    selectedTaskPlatform(...args: any[]): any;
}

export declare const QuestStore: QuestStore;
