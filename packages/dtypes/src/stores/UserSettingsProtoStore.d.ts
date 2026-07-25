// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: UserSettingsProtoStore

export interface UserSettingsProtoStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    computeState(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    frecencyWithoutFetchingLatest: any;
    getDefaultGuildThemePreference(...args: any[]): any;
    getDismissedGuildContent(...args: any[]): any;
    getFullState(...args: any[]): any;
    getGuildDismissedContentState(...args: any[]): any;
    getGuildFolders(...args: any[]): any;
    getGuildRecentsDismissedAt(...args: any[]): any;
    getGuildsProto(...args: any[]): any;
    getGuildThemeSourcePreferenceOverride(...args: any[]): any;
    getState(...args: any[]): any;
    hasLoaded(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    resolveGuildThemeSourcePreference(...args: any[]): any;
    settings: any;
    throttledCallback(...args: any[]): any;
    wasMostRecentUpdateFromServer: boolean;
}

export declare const UserSettingsProtoStore: UserSettingsProtoStore;
