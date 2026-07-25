// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildRoleStore

export interface GuildRoleStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    database: any;
    doEmitChanges(...args: any[]): any;
    dualReadValidationDisabled: boolean;
    getEveryoneRole(...args: any[]): any;
    getManyRoles(...args: any[]): any;
    getNumRoles(...args: any[]): any;
    getRole(...args: any[]): any;
    getRolesSnapshot(...args: any[]): any;
    getSortedRoles(...args: any[]): any;
    getUnsafeMutableRoles(...args: any[]): any;
    mode: string;
    partitionVersion(...args: any[]): any;
    recordCreators: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    serializeAllGuildRoles(...args: any[]): any;
    shadowDatabases: any;
    shadowRecordCreators: any;
    state: any;
    stateWrapper(...args: any[]): any;
    wrappedState: any;
}

export declare const GuildRoleStore: GuildRoleStore;
