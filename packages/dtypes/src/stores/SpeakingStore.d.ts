// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SpeakingStore

export interface SpeakingStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getSpeakers(...args: any[]): any;
    getSpeakingDuration(...args: any[]): any;
    getVoiceVolume(...args: any[]): any;
    initialize(...args: any[]): any;
    isAnyoneElseSpeaking(...args: any[]): any;
    isAnyonePrioritySpeaking(...args: any[]): any;
    isCurrentUserPrioritySpeaker(...args: any[]): any;
    isCurrentUserPrioritySpeaking(...args: any[]): any;
    isCurrentUserPTTActive(...args: any[]): any;
    isCurrentUserSpeaking(...args: any[]): any;
    isPrioritySpeaker(...args: any[]): any;
    isSoundSharing(...args: any[]): any;
    isSpeaking(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const SpeakingStore: SpeakingStore;
