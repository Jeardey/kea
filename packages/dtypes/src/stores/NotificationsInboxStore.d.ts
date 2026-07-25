// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NotificationsInboxStore

export interface NotificationsInboxStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    canLoadMore(...args: any[]): any;
    currentRequestAnalyticsPayload: any;
    doEmitChanges(...args: any[]): any;
    getChannelInfoMap(...args: any[]): any;
    getDevOverrides(...args: any[]): any;
    getInboxMessages(...args: any[]): any;
    getNotifyingChannelIds(...args: any[]): any;
    hasLoadedEver: boolean;
    hasMoreToLoad: boolean;
    hasPreloaded: boolean;
    initialize(...args: any[]): any;
    isLoading: boolean;
    isLoadingComplete: boolean;
    oldestDisplayedMessageId: string;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    selectedItemInfo: any;
}

export declare const NotificationsInboxStore: NotificationsInboxStore;
