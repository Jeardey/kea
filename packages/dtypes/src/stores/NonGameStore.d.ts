// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NonGameStore

export interface NonGameStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    canFetch(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    etag: string;
    fetching: boolean;
    getById(...args: any[]): any;
    getState(...args: any[]): any;
    hasAttemptedFetch: boolean;
    initialize(...args: any[]): any;
    lastFetched: number;
    nonGames: any[];
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
    ttl: number;
}

export declare const NonGameStore: NonGameStore;
