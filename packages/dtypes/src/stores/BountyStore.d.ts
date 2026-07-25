// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: BountyStore

export interface BountyStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    areAllBountiesCompleted(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAdDecisionByPlacementAndAdCreativeId(...args: any[]): any;
    getBountyVideoProgress(...args: any[]): any;
    getCompletedBountyCount(...args: any[]): any;
    isBountyCompleted(...args: any[]): any;
    isClaimingBountyReward(...args: any[]): any;
    isFetchingQuestHomeBounties: boolean;
    questHomeBounties: any[];
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const BountyStore: BountyStore;
