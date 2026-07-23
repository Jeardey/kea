// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: UnsyncedUserSettingsStore

export interface UnsyncedUserSettingsStore {
    activityPanelHeight: any;
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    callChatSidebarWidth: number;
    callHeaderHeight: any;
    darkSidebar: boolean;
    dataSavingMode: boolean;
    disableActivityHardwareAccelerationPrompt: boolean;
    disableActivityHostLeftNitroUpsell: boolean;
    disableApplicationSubscriptionCancellationSurvey: boolean;
    disableCallUserConfirmationPrompt: boolean;
    disableEmbeddedActivityPopOutAlert: boolean;
    disableHardwareMuteSilenceAlert: boolean;
    disableHideSelfStreamAndVideoConfirmationAlert: boolean;
    disableInviteWithTextChannelActivityLaunch: boolean;
    disableVoiceChannelChangeAlert: boolean;
    displayCompactAvatars: boolean;
    doEmitChanges(...args: any[]): any;
    expressionPickerWidth: string;
    getUserAgnosticState(...args: any[]): any;
    hdrDynamicRange: string;
    homeSidebarWidth: number;
    initialize(...args: any[]): any;
    isVisualRefreshDisabled(...args: any[]): any;
    listDensity: string;
    lowQualityImageMode: boolean;
    messageRequestSidebarWidth: number;
    postSidebarWidth: number;
    pushUpsellUserSettingsDismissed: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    saveCameraUploadsToDevice: boolean;
    threadSidebarWidth: number;
    throttledCallback(...args: any[]): any;
    useSystemTheme: number;
    videoUploadQuality: string;
}

export declare const UnsyncedUserSettingsStore: UnsyncedUserSettingsStore;
