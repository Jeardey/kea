// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: EmojiStore

export interface EmojiStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    categories: any[];
    diversitySurrogate: string;
    doEmitChanges(...args: any[]): any;
    emojiFrecencyWithoutFetchingLatest: any;
    emojiReactionFrecencyWithoutFetchingLatest: any;
    expandedSectionsByGuildIds: any;
    getCustomEmojiById(...args: any[]): any;
    getDisambiguatedEmojiContext(...args: any[]): any;
    getGuildEmoji(...args: any[]): any;
    getGuilds(...args: any[]): any;
    getHiddenEmojiIds(...args: any[]): any;
    getNewlyAddedEmoji(...args: any[]): any;
    getSearchResultsOrder(...args: any[]): any;
    getState(...args: any[]): any;
    getTopEmoji(...args: any[]): any;
    getTopEmojisMetadata(...args: any[]): any;
    getUsableCustomEmojiById(...args: any[]): any;
    getUsableGuildEmoji(...args: any[]): any;
    hasFavoriteEmojis(...args: any[]): any;
    hasPendingUsage(...args: any[]): any;
    hasUsableEmojiInAnyGuild(...args: any[]): any;
    initialize(...args: any[]): any;
    loadState: number;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    searchWithoutFetchingLatest(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const EmojiStore: EmojiStore;
