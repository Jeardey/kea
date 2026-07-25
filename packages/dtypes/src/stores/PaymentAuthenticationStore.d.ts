// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PaymentAuthenticationStore

export interface PaymentAuthenticationStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    awaitingPaymentId: any;
    doEmitChanges(...args: any[]): any;
    error: any;
    isAwaitingAuthentication: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    wasCancelled: boolean;
}

export declare const PaymentAuthenticationStore: PaymentAuthenticationStore;
