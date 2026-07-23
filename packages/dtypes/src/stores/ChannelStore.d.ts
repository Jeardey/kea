// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ChannelStore

export interface ChannelStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getAllThreadsForGuild(...args: any[]): any;
    getAllThreadsForParent(...args: any[]): any;
    getBasicChannel(...args: any[]): any;
    getChannel(...args: any[]): any;
    getChannelIds(...args: any[]): any;
    getDebugInfo(...args: any[]): any;
    getDMChannelFromUserId(...args: any[]): any;
    getDMFromUserId(...args: any[]): any;
    getDMUserIds(...args: any[]): any;
    getGuildChannelsVersion(...args: any[]): any;
    getInitialOverlayState(...args: any[]): any;
    getMutableBasicGuildChannelsForGuild(...args: any[]): any;
    getMutableDMsByUserIds(...args: any[]): any;
    getMutableGuildChannelsForGuild(...args: any[]): any;
    getMutablePrivateChannels(...args: any[]): any;
    getPrivateChannelsVersion(...args: any[]): any;
    getSortedLinkedChannelsForGuild(...args: any[]): any;
    getSortedPrivateChannels(...args: any[]): any;
    hasChannel(...args: any[]): any;
    initialize(...args: any[]): any;
    loadAllGuildAndPrivateChannelsFromDisk(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ChannelStore: ChannelStore;
