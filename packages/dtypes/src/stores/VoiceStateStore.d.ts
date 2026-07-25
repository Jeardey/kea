// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: VoiceStateStore

export interface VoiceStateStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllVoiceStates(...args: any[]): any;
    getCurrentClientVoiceChannelId(...args: any[]): any;
    getDiscoverableVoiceState(...args: any[]): any;
    getDiscoverableVoiceStateForUser(...args: any[]): any;
    getUsersWithVideo(...args: any[]): any;
    getUserVoiceChannelId(...args: any[]): any;
    getVideoVoiceStatesForChannel(...args: any[]): any;
    getVoicePlatformForChannel(...args: any[]): any;
    getVoiceState(...args: any[]): any;
    getVoiceStateForChannel(...args: any[]): any;
    getVoiceStateForSession(...args: any[]): any;
    getVoiceStateForUser(...args: any[]): any;
    getVoiceStates(...args: any[]): any;
    getVoiceStatesForChannel(...args: any[]): any;
    getVoiceStateVersion(...args: any[]): any;
    hasVideo(...args: any[]): any;
    isCurrentClientInVoiceChannel(...args: any[]): any;
    isInChannel(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    userHasBeenMovedVersion: number;
}

export declare const VoiceStateStore: VoiceStateStore;
