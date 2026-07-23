// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildReadStateStore

export interface GuildReadStateStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getGuildChangeSentinel(...args: any[]): any;
    getGuildHasUnreadIgnoreMuted(...args: any[]): any;
    getHighImportanceMentionCountForChannel(...args: any[]): any;
    getIsMentionLowImportance(...args: any[]): any;
    getMentionCount(...args: any[]): any;
    getMentionCountForPrivateChannel(...args: any[]): any;
    getMutableGuildStates(...args: any[]): any;
    getMutableUnreadGuilds(...args: any[]): any;
    getPrivateChannelMentionCount(...args: any[]): any;
    getStoreChangeSentinel(...args: any[]): any;
    getTotalMentionCount(...args: any[]): any;
    getTotalNotificationsMentionCount(...args: any[]): any;
    hasAnyUnread(...args: any[]): any;
    hasUnread(...args: any[]): any;
    initialize(...args: any[]): any;
    loadCache(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldCountChannelUnread(...args: any[]): any;
    takeSnapshot(...args: any[]): any;
}

export declare const GuildReadStateStore: GuildReadStateStore;
