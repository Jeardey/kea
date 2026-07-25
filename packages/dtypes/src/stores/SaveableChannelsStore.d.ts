// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SaveableChannelsStore

export interface SaveableChannelsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    canEvictOrphans(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getSaveableChannels(...args: any[]): any;
    initialize(...args: any[]): any;
    loadCache(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    saveLimit(...args: any[]): any;
    takeSnapshot(...args: any[]): any;
}

export declare const SaveableChannelsStore: SaveableChannelsStore;
