// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ChannelSettingsPermissionsStore

export interface ChannelSettingsPermissionsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    advancedMode: boolean;
    category: any;
    channel: any;
    doEmitChanges(...args: any[]): any;
    editedPermissionIds: any[];
    formState: string;
    getPermissionOverwrite(...args: any[]): any;
    hasChanges(...args: any[]): any;
    initialize(...args: any[]): any;
    isLockable: any;
    locked: any;
    permissionOverwrites: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    selectedOverwriteId: any;
    showNotice(...args: any[]): any;
}

export declare const ChannelSettingsPermissionsStore: ChannelSettingsPermissionsStore;
