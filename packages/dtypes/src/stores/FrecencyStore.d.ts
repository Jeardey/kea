// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: FrecencyStore

export interface FrecencyStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    frecencyWithoutFetchingLatest: any;
    getBonusScore(...args: any[]): any;
    getFrequentlyWithoutFetchingLatest(...args: any[]): any;
    getMaxScore(...args: any[]): any;
    getScoreForDMWithoutFetchingLatest(...args: any[]): any;
    getScoreWithoutFetchingLatest(...args: any[]): any;
    getState(...args: any[]): any;
    getVersion(...args: any[]): any;
    hasPendingUsage(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const FrecencyStore: FrecencyStore;
