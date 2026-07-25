// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildPowerupsStore

export interface GuildPowerupsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getState(...args: any[]): any;
    getStateForGuild(...args: any[]): any;
    hasFetchedPowerupCatalog(...args: any[]): any;
    hasFetchedUnlockedPowerups(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldFetchCatalogForGuild(...args: any[]): any;
    shouldFetchPowerupsForGuild(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const GuildPowerupsStore: GuildPowerupsStore;
