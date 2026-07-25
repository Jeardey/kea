// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildStickersStore

export interface GuildStickersStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    database: any;
    doEmitChanges(...args: any[]): any;
    dualReadValidationDisabled: boolean;
    getAllGuildStickers(...args: any[]): any;
    getStickerById(...args: any[]): any;
    getStickerMetadataMap(...args: any[]): any;
    getStickersByGuildId(...args: any[]): any;
    mode: string;
    recordCreators: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shadowDatabases: any;
    shadowRecordCreators: any;
    state: any;
    stateWrapper(...args: any[]): any;
    stickerByIdIndex: any;
    wrappedState: any;
}

export declare const GuildStickersStore: GuildStickersStore;
