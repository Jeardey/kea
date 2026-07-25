// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: WebAuthnStore

export interface WebAuthnStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getCredentials(...args: any[]): any;
    hasCredentials: boolean;
    hasFetchedCredentials(...args: any[]): any;
    hasPendingRegisterTrigger(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const WebAuthnStore: WebAuthnStore;
