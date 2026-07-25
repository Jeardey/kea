// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NotificationSettingsStore

export interface NotificationSettingsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getDesktopType(...args: any[]): any;
    getDisableAllSounds(...args: any[]): any;
    getDisabledSounds(...args: any[]): any;
    getDisableUnreadBadge(...args: any[]): any;
    getNotifyMessagesInSelectedChannel(...args: any[]): any;
    getTTSType(...args: any[]): any;
    getUserAgnosticState(...args: any[]): any;
    initialize(...args: any[]): any;
    isSoundDisabled(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    screenDowntimeReminder: boolean;
    taskbarFlash: boolean;
    throttledCallback(...args: any[]): any;
}

export declare const NotificationSettingsStore: NotificationSettingsStore;
