// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: MemberSafetyStore

export interface MemberSafetyStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getCurrentMemberSearchResultsByGuildId(...args: any[]): any;
    getElasticSearchPaginationByGuildId(...args: any[]): any;
    getEnhancedMember(...args: any[]): any;
    getEstimatedMemberSearchCountByGuildId(...args: any[]): any;
    getKnownMemberSearchCountByGuildId(...args: any[]): any;
    getLastCursorTimestamp(...args: any[]): any;
    getLastRefreshTimestamp(...args: any[]): any;
    getMembersByGuildId(...args: any[]): any;
    getMembersCountByGuildId(...args: any[]): any;
    getNewMemberTimestamp(...args: any[]): any;
    getPagedMembersByGuildId(...args: any[]): any;
    getPaginationStateByGuildId(...args: any[]): any;
    getSearchStateByGuildId(...args: any[]): any;
    hasDefaultSearchStateByGuildId(...args: any[]): any;
    initialize(...args: any[]): any;
    isInitialized(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const MemberSafetyStore: MemberSafetyStore;
