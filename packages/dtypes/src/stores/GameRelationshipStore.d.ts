// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GameRelationshipStore

export interface GameRelationshipStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getGameFriendCount(...args: any[]): any;
    getGameFriendsForApplication(...args: any[]): any;
    getGameFriendsForUser(...args: any[]): any;
    getGameRelationshipCount(...args: any[]): any;
    getGameRelationships(...args: any[]): any;
    getGameRelationshipsByType(...args: any[]): any;
    getGameRelationshipsForUser(...args: any[]): any;
    getGameRelationshipsForUserByType(...args: any[]): any;
    getGameRelationshipsVersion(...args: any[]): any;
    getPendingIncomingCount(...args: any[]): any;
    getPendingOutgoingCount(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const GameRelationshipStore: GameRelationshipStore;
