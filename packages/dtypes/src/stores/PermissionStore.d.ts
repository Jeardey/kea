// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PermissionStore

export interface PermissionStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    can(...args: any[]): any;
    canAccessGuildSettings(...args: any[]): any;
    canAccessMemberSafetyPage(...args: any[]): any;
    canBasicChannel(...args: any[]): any;
    canImpersonateRole(...args: any[]): any;
    canManageUser(...args: any[]): any;
    canWithPartialContext(...args: any[]): any;
    computeBasicPermissions(...args: any[]): any;
    computePermissions(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getChannelPermissions(...args: any[]): any;
    getChannelsVersion(...args: any[]): any;
    getGuildPermissionProps(...args: any[]): any;
    getGuildPermissions(...args: any[]): any;
    getGuildVersion(...args: any[]): any;
    getHighestRole(...args: any[]): any;
    initialize(...args: any[]): any;
    isRoleHigher(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const PermissionStore: PermissionStore;
