// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: CollectiblesCategoryStore

export interface CollectiblesCategoryStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    categories: any;
    doEmitChanges(...args: any[]): any;
    error: any;
    getCategory(...args: any[]): any;
    getCategoryByStoreListingId(...args: any[]): any;
    getCategoryForProduct(...args: any[]): any;
    getProduct(...args: any[]): any;
    getProductByStoreListingId(...args: any[]): any;
    getProductFetch(...args: any[]): any;
    getProductsBySkus(...args: any[]): any;
    initialize(...args: any[]): any;
    isFetchingCategories: boolean;
    isFetchingProduct(...args: any[]): any;
    isProductFetchBackedOff(...args: any[]): any;
    lastErrorTimestamp: any;
    lastFetchOptions: any;
    lastSuccessfulFetch: any;
    products: any;
    productsWithVariantsAsGroup: any[];
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    skipNumCategories: number;
}

export declare const CollectiblesCategoryStore: CollectiblesCategoryStore;
