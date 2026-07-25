// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: AuthenticationStore

export interface AuthenticationStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    allowLogoutRedirect(...args: any[]): any;
    attemptedPasswordLogin(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAnalyticsToken(...args: any[]): any;
    getAuthSessionIdHash(...args: any[]): any;
    getCredentials(...args: any[]): any;
    getFingerprint(...args: any[]): any;
    getId(...args: any[]): any;
    getInstallationForTracking(...args: any[]): any;
    getIsPasswordlessActive(...args: any[]): any;
    getLoginInstanceId(...args: any[]): any;
    getLoginStatus(...args: any[]): any;
    getMFAMethods(...args: any[]): any;
    getMFATicket(...args: any[]): any;
    getSessionId(...args: any[]): any;
    getStaticAuthSessionId(...args: any[]): any;
    getSuspendedUserToken(...args: any[]): any;
    getToken(...args: any[]): any;
    hasTOTPEnabled(...args: any[]): any;
    initialize(...args: any[]): any;
    isAuthenticated(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const AuthenticationStore: AuthenticationStore;
