// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ApplicationCommandIndexStore

export interface ApplicationCommandIndexStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    applicationIndices: any;
    applicationIndicesVersion: number;
    collator: any;
    doEmitChanges(...args: any[]): any;
    getApplicationState(...args: any[]): any;
    getApplicationStates(...args: any[]): any;
    getContextState(...args: any[]): any;
    getGuildState(...args: any[]): any;
    getUserState(...args: any[]): any;
    hasApplicationState(...args: any[]): any;
    hasContextStateApplication(...args: any[]): any;
    hasUserStateApplication(...args: any[]): any;
    indices: any;
    initialize(...args: any[]): any;
    oldLocale: string;
    query(...args: any[]): any;
    queryInstallOnDemandApp(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ApplicationCommandIndexStore: ApplicationCommandIndexStore;
