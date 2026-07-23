// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GameStore

export interface GameStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    blocklistEtag: string;
    callback(...args: any[]): any;
    canFetchDetectableGames(...args: any[]): any;
    canFetchExecutableBlocklist(...args: any[]): any;
    detectableGamesEtag: string;
    detectableGamesTtl: number;
    doEmitChanges(...args: any[]): any;
    fetching: boolean;
    findGame(...args: any[]): any;
    games: any[];
    getBlockReason(...args: any[]): any;
    getDetectableGame(...args: any[]): any;
    getGameByApplication(...args: any[]): any;
    getGameByExecutable(...args: any[]): any;
    getOfficialGame(...args: any[]): any;
    getState(...args: any[]): any;
    hasAttemptedFetch: boolean;
    initialize(...args: any[]): any;
    isGameInDatabase(...args: any[]): any;
    lastFetched: number;
    markGameReported(...args: any[]): any;
    maybeTrackApplicationLookupFallthrough(...args: any[]): any;
    maybeTrackBlock(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    searchGamesByName(...args: any[]): any;
    shouldBlock(...args: any[]): any;
    shouldReport(...args: any[]): any;
    throttledCallback(...args: any[]): any;
    trackNameMatchFallback(...args: any[]): any;
}

export declare const GameStore: GameStore;
