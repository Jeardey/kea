// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildThemePreviewStore

export interface GuildThemePreviewStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    draft: any;
    draftEnabled: boolean;
    guildId: any;
    hasChanges(...args: any[]): any;
    initialize(...args: any[]): any;
    isActive: boolean;
    isAwaitingGuildUpdate: boolean;
    isSaving: boolean;
    origin: any;
    original: any;
    originalEnabled: boolean;
    owner: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    saveError: any;
}

export declare const GuildThemePreviewStore: GuildThemePreviewStore;
