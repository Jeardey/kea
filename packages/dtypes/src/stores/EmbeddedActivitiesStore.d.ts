// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: EmbeddedActivitiesStore

export interface EmbeddedActivitiesStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActivityPanelMode(...args: any[]): any;
    getActivityPopoutWindowLayout(...args: any[]): any;
    getConnectedActivityChannelId(...args: any[]): any;
    getConnectedActivityLocation(...args: any[]): any;
    getCurrentEmbeddedActivity(...args: any[]): any;
    getEmbeddedActivitiesByChannel(...args: any[]): any;
    getEmbeddedActivitiesForChannel(...args: any[]): any;
    getEmbeddedActivitiesForChannelIncludingHidden(...args: any[]): any;
    getEmbeddedActivitiesForGuild(...args: any[]): any;
    getEmbeddedActivitiesForGuildIncludingHidden(...args: any[]): any;
    getEmbeddedActivitiesForLocation(...args: any[]): any;
    getEmbeddedActivitiesForLocationIncludingHidden(...args: any[]): any;
    getEmbeddedActivityDurationMs(...args: any[]): any;
    getEmbeddedActivityForUserId(...args: any[]): any;
    getFocusedLayout(...args: any[]): any;
    getGridOrientationLockStateForApp(...args: any[]): any;
    getLaunchState(...args: any[]): any;
    getLaunchStates(...args: any[]): any;
    getLayoutModeForApp(...args: any[]): any;
    getOrientationLockStateForApp(...args: any[]): any;
    getPipOrientationLockStateForApp(...args: any[]): any;
    getSelfEmbeddedActivities(...args: any[]): any;
    getSelfEmbeddedActivityForChannel(...args: any[]): any;
    getSelfEmbeddedActivityForLocation(...args: any[]): any;
    getShelfActivities(...args: any[]): any;
    getShelfFetchStatus(...args: any[]): any;
    getState(...args: any[]): any;
    hasActivityEverBeenLaunched(...args: any[]): any;
    initialize(...args: any[]): any;
    isLaunchingActivity(...args: any[]): any;
    isProxyTicketRefreshing(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldFetchShelf(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const EmbeddedActivitiesStore: EmbeddedActivitiesStore;
