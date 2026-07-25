// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: OverlayStore

export interface OverlayStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    customInviteMessage: any;
    disableClickableRegions: boolean;
    doEmitChanges(...args: any[]): any;
    getActiveRegions(...args: any[]): any;
    getAvatarSizeMode(...args: any[]): any;
    getDisableExternalLinkAlert(...args: any[]): any;
    getDisplayNameMode(...args: any[]): any;
    getDisplayUserMode(...args: any[]): any;
    getFocusedPID(...args: any[]): any;
    getNotificationPositionMode(...args: any[]): any;
    getSelectedCallId(...args: any[]): any;
    getSelectedChannelId(...args: any[]): any;
    getSelectedGuildId(...args: any[]): any;
    getState(...args: any[]): any;
    getTextWidgetOpacity(...args: any[]): any;
    getTrackedGame(...args: any[]): any;
    incompatibleApp: boolean;
    initialize(...args: any[]): any;
    initialized: boolean;
    isFocused(...args: any[]): any;
    isInstanceFocused(...args: any[]): any;
    isInstanceLocked(...args: any[]): any;
    isLocked(...args: any[]): any;
    isPinned(...args: any[]): any;
    isPreviewingInGame(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    showInviteNotification: boolean;
    throttledCallback(...args: any[]): any;
}

export declare const OverlayStore: OverlayStore;
