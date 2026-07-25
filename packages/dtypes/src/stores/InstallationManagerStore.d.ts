// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: InstallationManagerStore

export interface InstallationManagerStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    defaultInstallationPath: string;
    doEmitChanges(...args: any[]): any;
    getInstallationPath(...args: any[]): any;
    getLabelFromPath(...args: any[]): any;
    getState(...args: any[]): any;
    hasGamesInstalledInPath(...args: any[]): any;
    initialize(...args: any[]): any;
    installationPaths: any[];
    installationPathsMetadata: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shouldBeInstalled(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const InstallationManagerStore: InstallationManagerStore;
