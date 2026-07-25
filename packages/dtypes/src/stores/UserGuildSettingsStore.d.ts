// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: UserGuildSettingsStore

export interface UserGuildSettingsStore {
    accountNotificationSettings: any;
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    allowAllMessages(...args: any[]): any;
    allowNoMessages(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllSettings(...args: any[]): any;
    getChannelFlags(...args: any[]): any;
    getChannelIdFlags(...args: any[]): any;
    getChannelMessageNotifications(...args: any[]): any;
    getChannelMuteConfig(...args: any[]): any;
    getChannelOverrides(...args: any[]): any;
    getChannelRecordUnreadSetting(...args: any[]): any;
    getChannelUnreadSetting(...args: any[]): any;
    getGuildFavorites(...args: any[]): any;
    getGuildFlags(...args: any[]): any;
    getGuildUnreadSetting(...args: any[]): any;
    getMessageNotifications(...args: any[]): any;
    getMuteConfig(...args: any[]): any;
    getMutedChannels(...args: any[]): any;
    getNewForumThreadsCreated(...args: any[]): any;
    getNotifyHighlights(...args: any[]): any;
    getOptedInChannels(...args: any[]): any;
    getOptedInChannelsWithPendingUpdates(...args: any[]): any;
    getPendingChannelUpdates(...args: any[]): any;
    getState(...args: any[]): any;
    initialize(...args: any[]): any;
    isCategoryMuted(...args: any[]): any;
    isChannelMuted(...args: any[]): any;
    isChannelOptedIn(...args: any[]): any;
    isChannelOrParentOptedIn(...args: any[]): any;
    isChannelRecordOrParentOptedIn(...args: any[]): any;
    isFavorite(...args: any[]): any;
    isGuildCollapsed(...args: any[]): any;
    isGuildOrCategoryOrChannelMuted(...args: any[]): any;
    isMessagesFavorite(...args: any[]): any;
    isMobilePushEnabled(...args: any[]): any;
    isMuted(...args: any[]): any;
    isMuteScheduledEventsEnabled(...args: any[]): any;
    isOptInEnabled(...args: any[]): any;
    isSuppressEveryoneEnabled(...args: any[]): any;
    isSuppressRolesEnabled(...args: any[]): any;
    isTemporarilyMuted(...args: any[]): any;
    mentionOnAllMessages: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    resolvedMessageNotifications(...args: any[]): any;
    resolveGuildUnreadSetting(...args: any[]): any;
    resolveUnreadSetting(...args: any[]): any;
    throttledCallback(...args: any[]): any;
    useNewNotifications: boolean;
}

export declare const UserGuildSettingsStore: UserGuildSettingsStore;
