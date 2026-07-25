// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildSettingsGuildThemeStore

export interface GuildSettingsGuildThemeStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    draftEnabled: boolean;
    draftThemeSettings: any;
    guildId: any;
    hasChanges(...args: any[]): any;
    initialize(...args: any[]): any;
    isInitialized: boolean;
    isSaving: boolean;
    originalEnabled: boolean;
    originalThemeSettings: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    saveError: any;
    showNotice(...args: any[]): any;
}

export declare const GuildSettingsGuildThemeStore: GuildSettingsGuildThemeStore;
