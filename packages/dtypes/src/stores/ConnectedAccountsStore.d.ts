// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ConnectedAccountsStore

export interface ConnectedAccountsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addPendingAuthorizedState(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    deletePendingAuthorizedState(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAccount(...args: any[]): any;
    getAccounts(...args: any[]): any;
    getLocalAccount(...args: any[]): any;
    getLocalAccounts(...args: any[]): any;
    hasPendingAuthorizedState(...args: any[]): any;
    isFetching(...args: any[]): any;
    isJoining(...args: any[]): any;
    isSuggestedAccountType(...args: any[]): any;
    joinErrorMessage(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ConnectedAccountsStore: ConnectedAccountsStore;
