// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: BillingInfoStore

export interface BillingInfoStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    editSourceError: any;
    ipCountryCode: string;
    ipCountryCodeHasError: boolean;
    ipCountryCodeLoaded: boolean;
    ipCountryCodeRequest: any;
    ipCountryCodeWithFallback: string;
    ipLocation: any;
    ipLocationHasError: boolean;
    ipLocationLoaded: boolean;
    ipLocationRequest: any;
    isBusy: boolean;
    isPaymentSourceFetching: boolean;
    isRemovingPaymentSource: boolean;
    isSubscriptionFetching: boolean;
    isSyncing: boolean;
    isUpdatingPaymentSource: boolean;
    paymentSourcesFetchRequest: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    removeSourceError: any;
}

export declare const BillingInfoStore: BillingInfoStore;
