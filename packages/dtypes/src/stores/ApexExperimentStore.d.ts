// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ApexExperimentStore

export interface ApexExperimentStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    handleConnectionOpen(...args: any[]): any;
    handleGuildCreate(...args: any[]): any;
    initialize(...args: any[]): any;
    lastEmittedDebugVariantId: any;
    maybeEmitDebugExperimentEvent(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    surface: string;
    throttledCallback(...args: any[]): any;
    track(...args: any[]): any;
}

export declare const ApexExperimentStore: ApexExperimentStore;
