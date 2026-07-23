// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ChannelRTCStore

export interface ChannelRTCStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActivityParticipants(...args: any[]): any;
    getAllChatOpen(...args: any[]): any;
    getChatOpen(...args: any[]): any;
    getFilteredParticipants(...args: any[]): any;
    getGuildRingingUsers(...args: any[]): any;
    getLayout(...args: any[]): any;
    getMode(...args: any[]): any;
    getOpenChatChannelIds(...args: any[]): any;
    getParticipant(...args: any[]): any;
    getParticipants(...args: any[]): any;
    getParticipantsOpen(...args: any[]): any;
    getParticipantsVersion(...args: any[]): any;
    getSelectedParticipant(...args: any[]): any;
    getSelectedParticipantId(...args: any[]): any;
    getSelectedParticipantStats(...args: any[]): any;
    getSpeakingParticipants(...args: any[]): any;
    getStageStreamSize(...args: any[]): any;
    getStageVideoLimitBoostUpsellDismissed(...args: any[]): any;
    getState(...args: any[]): any;
    getStreamParticipants(...args: any[]): any;
    getUserParticipantCount(...args: any[]): any;
    getVideoParticipants(...args: any[]): any;
    getVoiceParticipantsHidden(...args: any[]): any;
    initialize(...args: any[]): any;
    isFullscreenInContext(...args: any[]): any;
    isParticipantPoppedOut(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const ChannelRTCStore: ChannelRTCStore;
