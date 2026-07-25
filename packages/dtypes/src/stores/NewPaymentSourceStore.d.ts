// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NewPaymentSourceStore

export interface NewPaymentSourceStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    adyenPaymentData: any;
    braintreeEmail: string;
    braintreeNonce: any;
    clearRedirectedPaymentSourceId(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    error: any;
    getBillingAddressInfo(...args: any[]): any;
    getCreditCardInfo(...args: any[]): any;
    isBillingAddressInfoValid: boolean;
    isCardInfoValid: boolean;
    popupCallbackCalled: any;
    redirectedPaymentId: any;
    redirectedPaymentSourceId: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    stripePaymentMethod: any;
    venmoUsername: string;
}

export declare const NewPaymentSourceStore: NewPaymentSourceStore;
