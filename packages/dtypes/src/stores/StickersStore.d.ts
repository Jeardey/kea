// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: StickersStore

export interface StickersStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllGuildStickers(...args: any[]): any;
    getAllPackStickers(...args: any[]): any;
    getPremiumPacks(...args: any[]): any;
    getRawStickersByGuild(...args: any[]): any;
    getStickerById(...args: any[]): any;
    getStickerMetadataArrays(...args: any[]): any;
    getStickerPack(...args: any[]): any;
    getStickersByGuildId(...args: any[]): any;
    hasLoadedStickerPacks: boolean;
    initialize(...args: any[]): any;
    isFetchingStickerPacks: boolean;
    isLoaded: boolean;
    isPremiumPack(...args: any[]): any;
    loadState: number;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const StickersStore: StickersStore;
