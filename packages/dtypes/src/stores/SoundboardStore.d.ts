// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: SoundboardStore

export interface SoundboardStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getFavorites(...args: any[]): any;
    getFrequentlyUsedSoundIds(...args: any[]): any;
    getOverlaySerializedState(...args: any[]): any;
    getSound(...args: any[]): any;
    getSoundById(...args: any[]): any;
    getSounds(...args: any[]): any;
    getSoundsForGuild(...args: any[]): any;
    hasFetchedAllSounds(...args: any[]): any;
    hasFetchedDefaultSounds(...args: any[]): any;
    hasHadOtherUserPlaySoundInSession(...args: any[]): any;
    hasPendingUsage(...args: any[]): any;
    initialize(...args: any[]): any;
    isFavoriteSound(...args: any[]): any;
    isFetching(...args: any[]): any;
    isFetchingAnySounds(...args: any[]): any;
    isFetchingDefaultSounds(...args: any[]): any;
    isFetchingSounds(...args: any[]): any;
    isLocalSoundboardMuted(...args: any[]): any;
    isPlayingSound(...args: any[]): any;
    isSoundboardVolumeMuted(...args: any[]): any;
    isUserPlayingSounds(...args: any[]): any;
    playedSoundFrecencyWithoutFetchingLatest: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldFetchDefaultSounds(...args: any[]): any;
}

export declare const SoundboardStore: SoundboardStore;
