// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PaymentSourceStore

export interface PaymentSourceStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    defaultPaymentSource: any;
    defaultPaymentSourceId: any;
    doEmitChanges(...args: any[]): any;
    getDefaultBillingCountryCode(...args: any[]): any;
    getPaymentSource(...args: any[]): any;
    hasFetchedPaymentSources: boolean;
    paymentSourceIds: any[];
    paymentSources: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const PaymentSourceStore: PaymentSourceStore;
