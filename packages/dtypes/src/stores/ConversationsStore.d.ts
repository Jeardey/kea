// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ConversationsStore

export interface ConversationsStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getChannelConversations(...args: any[]): any;
    getConversationColor(...args: any[]): any;
    getConversationFeedbackRating(...args: any[]): any;
    getConversationForMessage(...args: any[]): any;
    getConversationMetadata(...args: any[]): any;
    getEdgeMarker(...args: any[]): any;
    getHydratedMessageById(...args: any[]): any;
    getHydratedMessages(...args: any[]): any;
    getMessage(...args: any[]): any;
    getMessageMetadata(...args: any[]): any;
    getSelectedConversation(...args: any[]): any;
    getSelectedConversationId(...args: any[]): any;
    hasChannelData(...args: any[]): any;
    initialize(...args: any[]): any;
    isConversationFetchPending(...args: any[]): any;
    isListFetchPending(...args: any[]): any;
    isPendingFetch(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const ConversationsStore: ConversationsStore;
