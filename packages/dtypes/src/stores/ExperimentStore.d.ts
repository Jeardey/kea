// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ExperimentStore

export interface ExperimentStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllExperimentAssignments(...args: any[]): any;
    getAllExperimentOverrideDescriptors(...args: any[]): any;
    getAllUserExperimentDescriptors(...args: any[]): any;
    getExperimentOverrideDescriptor(...args: any[]): any;
    getGuildExperimentBucket(...args: any[]): any;
    getGuildExperimentDescriptor(...args: any[]): any;
    getGuildExperiments(...args: any[]): any;
    getLoadedGuildExperiment(...args: any[]): any;
    getLoadedUserExperiment(...args: any[]): any;
    getRecentExposures(...args: any[]): any;
    getRegisteredExperiments(...args: any[]): any;
    getSerializedState(...args: any[]): any;
    getUserExperimentBucket(...args: any[]): any;
    getUserExperimentDescriptor(...args: any[]): any;
    hasExperimentTrackedExposure(...args: any[]): any;
    hasLoadedExperiments: boolean;
    hasRegisteredExperiment(...args: any[]): any;
    initialize(...args: any[]): any;
    loadCache(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    takeSnapshot(...args: any[]): any;
    trackExposure(...args: any[]): any;
}

export declare const ExperimentStore: ExperimentStore;
