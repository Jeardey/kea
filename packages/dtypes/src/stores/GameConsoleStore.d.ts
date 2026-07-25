// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GameConsoleStore

export interface GameConsoleStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAwaitingRemoteSessionInfo(...args: any[]): any;
    getDevice(...args: any[]): any;
    getDevicesForPlatform(...args: any[]): any;
    getFetchingDevices(...args: any[]): any;
    getLastSelectedDeviceByPlatform(...args: any[]): any;
    getPendingDeviceCommands(...args: any[]): any;
    getRemoteSessionId(...args: any[]): any;
    getUserAgnosticState(...args: any[]): any;
    initialize(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const GameConsoleStore: GameConsoleStore;
