// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GameServerStore

export interface GameServerStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getGlobalCatalogGame(...args: any[]): any;
    getGlobalCatalogState(...args: any[]): any;
    getLowestGameCostForGuild(...args: any[]): any;
    getState(...args: any[]): any;
    getStateForGuild(...args: any[]): any;
    hasFetchedCatalog(...args: any[]): any;
    hasFetchedInstances(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldFetchCatalogForGuild(...args: any[]): any;
    shouldFetchGlobalCatalog(...args: any[]): any;
    shouldFetchInstancesForGuild(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const GameServerStore: GameServerStore;
