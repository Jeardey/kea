// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: DeveloperOptionsStore

export interface DeveloperOptionsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    alertStartupMetrics: boolean;
    cssDebuggingEnabled: boolean;
    disableAppCollectionsCache: boolean;
    doEmitChanges(...args: any[]): any;
    getDebugOptionsHeaderValue(...args: any[]): any;
    getRoutingKeyHeaderValue(...args: any[]): any;
    initialize(...args: any[]): any;
    isAxeEnabled: boolean;
    isBugReporterEnabled: boolean;
    isForcedCanary: boolean;
    isIdleStatusIndicatorEnabled: boolean;
    isLoggingAnalyticsEvents: boolean;
    isLoggingGatewayEvents: boolean;
    isLoggingOverlayEvents: boolean;
    isLoggingQuestEvents: boolean;
    isStreamInfoOverlayEnabled: boolean;
    isTracingRequests: boolean;
    layoutDebuggingEnabled: boolean;
    logKeyboardMismatches: boolean;
    onlyShowPreviewAppCollections: boolean;
    preventPopoutClose: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    routingKeyTags: any[];
    sourceMapsEnabled: boolean;
}

export declare const DeveloperOptionsStore: DeveloperOptionsStore;
