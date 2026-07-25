// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: MessageStore

export interface MessageStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    focusedMessageId(...args: any[]): any;
    getLastChatCommandMessage(...args: any[]): any;
    getLastEditableMessage(...args: any[]): any;
    getLastMessage(...args: any[]): any;
    getLastNonCurrentUserMessage(...args: any[]): any;
    getMessage(...args: any[]): any;
    getMessages(...args: any[]): any;
    hasCurrentUserSentMessage(...args: any[]): any;
    hasCurrentUserSentMessageSinceAppStart(...args: any[]): any;
    hasCurrentUserSentWaveBlockingMessage(...args: any[]): any;
    hasPresent(...args: any[]): any;
    initialize(...args: any[]): any;
    isLoadingMessages(...args: any[]): any;
    isReady(...args: any[]): any;
    jumpedMessageId(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    whenReady(...args: any[]): any;
}

export declare const MessageStore: MessageStore;
