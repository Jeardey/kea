// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ConsentStore

export interface ConsentStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    consents: any;
    doEmitChanges(...args: any[]): any;
    fetchedConsents: boolean;
    getAuthenticationConsentRequired(...args: any[]): any;
    hasConsented(...args: any[]): any;
    receivedConsentsInConnectionOpen: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ConsentStore: ConsentStore;
