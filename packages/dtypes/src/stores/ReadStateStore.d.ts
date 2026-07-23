// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ReadStateStore

export interface ReadStateStore {
    ackMessageId(...args: any[]): any;
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllReadStates(...args: any[]): any;
    getChannelIdsForWindowId(...args: any[]): any;
    getForDebugging(...args: any[]): any;
    getGuildChannelUnreadState(...args: any[]): any;
    getGuildUnreadsSentinel(...args: any[]): any;
    getIsMentionLowImportance(...args: any[]): any;
    getMentionChannelIds(...args: any[]): any;
    getMentionCount(...args: any[]): any;
    getNonChannelAckId(...args: any[]): any;
    getNotifCenterReadState(...args: any[]): any;
    getOldestUnreadMessageId(...args: any[]): any;
    getOldestUnreadTimestamp(...args: any[]): any;
    getReadStatesByChannel(...args: any[]): any;
    getSnapshot(...args: any[]): any;
    getTrackedAckMessageId(...args: any[]): any;
    getUnreadCount(...args: any[]): any;
    hasOpenedThread(...args: any[]): any;
    hasRecentlyVisitedAndRead(...args: any[]): any;
    hasTrackedUnread(...args: any[]): any;
    hasUnread(...args: any[]): any;
    hasUnreadOrMentions(...args: any[]): any;
    hasUnreadPins(...args: any[]): any;
    initialize(...args: any[]): any;
    isEstimated(...args: any[]): any;
    isForumPostUnread(...args: any[]): any;
    isNewForumThread(...args: any[]): any;
    lastMessageId(...args: any[]): any;
    lastMessageTimestamp(...args: any[]): any;
    lastPinTimestamp(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ReadStateStore: ReadStateStore;
