// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: VirtualCurrencyStore

export interface VirtualCurrencyStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    balance: any;
    balancePillOverlay: boolean;
    doEmitChanges(...args: any[]): any;
    entitlements: any;
    fetchBalanceError: any;
    getCurrentBalance(...args: any[]): any;
    handleBalanceFetch(...args: any[]): any;
    handleBalanceFetchFail(...args: any[]): any;
    handleBalanceFetchSuccess(...args: any[]): any;
    handleBalanceStateReset(...args: any[]): any;
    handleBalanceUpdate(...args: any[]): any;
    handleOnboardingModalOpen(...args: any[]): any;
    handleOnboardingModalReset(...args: any[]): any;
    handleRedeemVirtualCurrencyFail(...args: any[]): any;
    handleRedeemVirtualCurrencyStart(...args: any[]): any;
    handleRedeemVirtualCurrencySuccess(...args: any[]): any;
    isFetchingBalance: boolean;
    isRedeeming: boolean;
    onboardingModalOpenedPrior: boolean;
    redeemError: any;
    redeemingSkuId: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    setBalancePillOverlay(...args: any[]): any;
}

export declare const VirtualCurrencyStore: VirtualCurrencyStore;
