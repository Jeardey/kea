// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: RunningGameStore

export interface RunningGameStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addExecutableTrackedByAnalytics(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    canCollectExecutableFingerprintsForRunningGames(...args: any[]): any;
    canShowAdminWarning: boolean;
    doEmitChanges(...args: any[]): any;
    getCandidateGames(...args: any[]): any;
    getCurrentGameForAnalytics(...args: any[]): any;
    getCurrentNonGameForAnalytics(...args: any[]): any;
    getDebugRunningGame(...args: any[]): any;
    getDetectionDebug(...args: any[]): any;
    getGameForName(...args: any[]): any;
    getGameForPID(...args: any[]): any;
    getGameOrTransformedSubgameForPID(...args: any[]): any;
    getGameOverlayStatus(...args: any[]): any;
    getGamesSeen(...args: any[]): any;
    getLauncherForPID(...args: any[]): any;
    getObservedAppNameForWindow(...args: any[]): any;
    getOverlayEnabledForGame(...args: any[]): any;
    getOverlayOptionsForPID(...args: any[]): any;
    getOverrideForGame(...args: any[]): any;
    getOverrides(...args: any[]): any;
    getRunningDiscordApplicationIds(...args: any[]): any;
    getRunningGames(...args: any[]): any;
    getRunningNonGames(...args: any[]): any;
    getRunningVerifiedApplicationIds(...args: any[]): any;
    getSeenGameByName(...args: any[]): any;
    getSystemServiceStatus(...args: any[]): any;
    getVisibleGame(...args: any[]): any;
    getVisibleRunningGames(...args: any[]): any;
    initialize(...args: any[]): any;
    isDetectionEnabled(...args: any[]): any;
    isGameSeen(...args: any[]): any;
    isGamesSeenLoaded(...args: any[]): any;
    isObservedAppRunning(...args: any[]): any;
    isSystemServiceInitialized(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldContinueWithoutElevatedProcessForPID(...args: any[]): any;
    shouldElevateProcessForPID(...args: any[]): any;
}

export declare const RunningGameStore: RunningGameStore;
