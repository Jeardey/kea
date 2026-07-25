// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: LibraryApplicationStore

export interface LibraryApplicationStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    entitledBranchIds: any[];
    fetched: boolean;
    getActiveLaunchOptionId(...args: any[]): any;
    getActiveLibraryApplication(...args: any[]): any;
    getAllLibraryApplications(...args: any[]): any;
    getLibraryApplication(...args: any[]): any;
    hasApplication(...args: any[]): any;
    hasLibraryApplication(...args: any[]): any;
    hasRemovedLibraryApplicationThisSession: boolean;
    initialize(...args: any[]): any;
    isUpdatingFlags(...args: any[]): any;
    libraryApplications: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    whenInitialized(...args: any[]): any;
}

export declare const LibraryApplicationStore: LibraryApplicationStore;
