// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: RelationshipStore

export interface RelationshipStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getBlockedIDs(...args: any[]): any;
    getBlockedOrIgnoredIDs(...args: any[]): any;
    getFriendCount(...args: any[]): any;
    getFriendIDs(...args: any[]): any;
    getIgnoredIDs(...args: any[]): any;
    getMutableRelationships(...args: any[]): any;
    getNickname(...args: any[]): any;
    getNote(...args: any[]): any;
    getOriginApplicationId(...args: any[]): any;
    getOutgoingCount(...args: any[]): any;
    getPendingCount(...args: any[]): any;
    getPendingIgnoredCount(...args: any[]): any;
    getRelationshipCount(...args: any[]): any;
    getRelationshipType(...args: any[]): any;
    getSince(...args: any[]): any;
    getSinces(...args: any[]): any;
    getSpamCount(...args: any[]): any;
    getVersion(...args: any[]): any;
    initialize(...args: any[]): any;
    isBlocked(...args: any[]): any;
    isBlockedForMessage(...args: any[]): any;
    isBlockedOrIgnored(...args: any[]): any;
    isBlockedOrIgnoredForMessage(...args: any[]): any;
    isFriend(...args: any[]): any;
    isIgnored(...args: any[]): any;
    isIgnoredForMessage(...args: any[]): any;
    isSpam(...args: any[]): any;
    isStranger(...args: any[]): any;
    isUnfilteredPendingIncoming(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const RelationshipStore: RelationshipStore;
