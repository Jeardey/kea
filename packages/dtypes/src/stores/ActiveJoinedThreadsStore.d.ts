// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ActiveJoinedThreadsStore

export interface ActiveJoinedThreadsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    computeAllActiveJoinedThreads(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActiveJoinedRelevantThreadsForGuild(...args: any[]): any;
    getActiveJoinedRelevantThreadsForParent(...args: any[]): any;
    getActiveJoinedThreadsForGuild(...args: any[]): any;
    getActiveJoinedThreadsForParent(...args: any[]): any;
    getActiveJoinedUnreadThreadsForGuild(...args: any[]): any;
    getActiveJoinedUnreadThreadsForParent(...args: any[]): any;
    getActiveThreadCount(...args: any[]): any;
    getActiveUnjoinedThreadsForGuild(...args: any[]): any;
    getActiveUnjoinedThreadsForParent(...args: any[]): any;
    getActiveUnjoinedUnreadThreadsForGuild(...args: any[]): any;
    getActiveUnjoinedUnreadThreadsForParent(...args: any[]): any;
    getAllActiveJoinedThreads(...args: any[]): any;
    getNewThreadCount(...args: any[]): any;
    getNewThreadCountsForGuild(...args: any[]): any;
    hasActiveJoinedUnreadThreads(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ActiveJoinedThreadsStore: ActiveJoinedThreadsStore;
