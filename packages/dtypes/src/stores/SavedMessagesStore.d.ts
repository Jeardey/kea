// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SavedMessagesStore

export interface SavedMessagesStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getIsStale(...args: any[]): any;
    getLastChanged(...args: any[]): any;
    getMessageBookmarks(...args: any[]): any;
    getMessageReminders(...args: any[]): any;
    getOverdueMessageReminderCount(...args: any[]): any;
    getSavedMessage(...args: any[]): any;
    getSavedMessageCount(...args: any[]): any;
    getSavedMessages(...args: any[]): any;
    hasOverdueReminder(...args: any[]): any;
    initialize(...args: any[]): any;
    isMessageBookmarked(...args: any[]): any;
    isMessageReminder(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const SavedMessagesStore: SavedMessagesStore;
