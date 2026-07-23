// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildStore

export interface GuildStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    database: any;
    doEmitChanges(...args: any[]): any;
    dualReadValidationDisabled: boolean;
    getGuild(...args: any[]): any;
    getGuildCount(...args: any[]): any;
    getGuildIds(...args: any[]): any;
    getGuilds(...args: any[]): any;
    getGuildsArray(...args: any[]): any;
    mode: string;
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

export declare const GuildStore: GuildStore;
