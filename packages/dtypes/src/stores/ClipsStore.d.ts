// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ClipsStore

export interface ClipsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    canShowReminders(...args: any[]): any;
    devSetLastClipsSession(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getClipById(...args: any[]): any;
    getClipByRemoteId(...args: any[]): any;
    getClipCandidateById(...args: any[]): any;
    getClipCandidates(...args: any[]): any;
    getClips(...args: any[]): any;
    getClipsWarningShown(...args: any[]): any;
    getCurrentClipsSession(...args: any[]): any;
    getEnableAutoclipping(...args: any[]): any;
    getExportingClipIds(...args: any[]): any;
    getHardwareClassification(...args: any[]): any;
    getHardwareClassificationForDecoupled(...args: any[]): any;
    getHardwareClassificationVersion(...args: any[]): any;
    getHistoricalClipsSessionById(...args: any[]): any;
    getIsAtMaxSaveClipOperations(...args: any[]): any;
    getLastClipsError(...args: any[]): any;
    getLastClipsSession(...args: any[]): any;
    getNewClipIds(...args: any[]): any;
    getSettings(...args: any[]): any;
    getUserAgnosticState(...args: any[]): any;
    hasClips(...args: any[]): any;
    hasTakenDecoupledClip(...args: any[]): any;
    hasUserSetAutoclippingSettings(...args: any[]): any;
    initialize(...args: any[]): any;
    isAutoStashEnabled(...args: any[]): any;
    isClipExporting(...args: any[]): any;
    isClipsEnabledForUser(...args: any[]): any;
    isViewerClippingAllowedForUser(...args: any[]): any;
    isVoiceRecordingAllowedForUser(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
    wasClipSharedInChannel(...args: any[]): any;
}

export declare const ClipsStore: ClipsStore;
