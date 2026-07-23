// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: RecentMentionsStore

export interface RecentMentionsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    everyoneFilter: boolean;
    getMentionCountForChannel(...args: any[]): any;
    getMentions(...args: any[]): any;
    getSettingsFilteredMentions(...args: any[]): any;
    guildFilter: string;
    hasLoadedEver: boolean;
    hasMention(...args: any[]): any;
    hasMore: boolean;
    initialize(...args: any[]): any;
    lastLoaded: number;
    loading: boolean;
    mentionCountByChannel: any;
    mentionsAreStale: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    roleFilter: boolean;
}

export declare const RecentMentionsStore: RecentMentionsStore;
