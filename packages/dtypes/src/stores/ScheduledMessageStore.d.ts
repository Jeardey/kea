// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ScheduledMessageStore

export interface ScheduledMessageStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getMessagesPendingDeletion(...args: any[]): any;
    getPendingScheduledMessage(...args: any[]): any;
    getScheduledMessagesForInbox(...args: any[]): any;
    loading: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ScheduledMessageStore: ScheduledMessageStore;
