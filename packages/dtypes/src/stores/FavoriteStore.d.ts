// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: FavoriteStore

export interface FavoriteStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    favoriteGuildEnabled: boolean;
    favoriteGuildMuted: boolean;
    getCategoryRecord(...args: any[]): any;
    getFavorite(...args: any[]): any;
    getFavoriteChannels(...args: any[]): any;
    getFavoritesCount(...args: any[]): any;
    getNickname(...args: any[]): any;
    hasStoredFavorites(...args: any[]): any;
    initialize(...args: any[]): any;
    isFavorite(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const FavoriteStore: FavoriteStore;
