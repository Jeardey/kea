// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildSettingsIntegrationsStore

export interface GuildSettingsIntegrationsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    editedCommandId: any;
    editedIntegration: any;
    editedWebhook: any;
    formState: string;
    getApplication(...args: any[]): any;
    getErrors(...args: any[]): any;
    getIntegration(...args: any[]): any;
    getSection(...args: any[]): any;
    getSectionId(...args: any[]): any;
    getWebhook(...args: any[]): any;
    guild: any;
    hasChanges(...args: any[]): any;
    initialize(...args: any[]): any;
    integrations: any[];
    isFetching(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    showNotice(...args: any[]): any;
    webhooks: any[];
}

export declare const GuildSettingsIntegrationsStore: GuildSettingsIntegrationsStore;
