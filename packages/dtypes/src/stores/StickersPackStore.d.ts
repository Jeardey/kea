// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: StickersPackStore

export interface StickersPackStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    dualReadValidationDisabled: boolean;
    getAllPackStickers(...args: any[]): any;
    getPremiumPacks(...args: any[]): any;
    getStickerById(...args: any[]): any;
    getStickerMetadataMap(...args: any[]): any;
    getStickerPack(...args: any[]): any;
    hasLoadedStickerPacks: boolean;
    isFetchingStickerPacks: boolean;
    isPremiumPack(...args: any[]): any;
    mode: string;
    packsDatabase: any;
    packStickerByIdIndex: any;
    packStickersDatabase: any;
    premiumPacksDatabase: any;
    recordCreators: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shadowDatabases: any;
    shadowRecordCreators: any;
    state: any;
    stateWrapper(...args: any[]): any;
    wrappedState: any;
}

export declare const StickersPackStore: StickersPackStore;
