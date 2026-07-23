// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: TestModeStore

export interface TestModeStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    error: any;
    getState(...args: any[]): any;
    getTestModeApplicationId(...args: any[]): any;
    initialize(...args: any[]): any;
    inTestModeForApplication(...args: any[]): any;
    inTestModeForEmbeddedApplication(...args: any[]): any;
    isFetchingAuthorization: boolean;
    isTestMode: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldDisplayTestMode(...args: any[]): any;
    testModeApplicationId: any;
    testModeEmbeddedApplicationId: any;
    testModeOriginURL: any;
    throttledCallback(...args: any[]): any;
    whenInitialized(...args: any[]): any;
}

export declare const TestModeStore: TestModeStore;
