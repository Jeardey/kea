// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildMemberStore

export interface GuildMemberStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getCachedSelfMember(...args: any[]): any;
    getCommunicationDisabledUserMap(...args: any[]): any;
    getCommunicationDisabledVersion(...args: any[]): any;
    getMember(...args: any[]): any;
    getMemberIds(...args: any[]): any;
    getMemberRoleWithPendingUpdates(...args: any[]): any;
    getMembers(...args: any[]): any;
    getMemberVersion(...args: any[]): any;
    getMutableAllGuildsAndMembers(...args: any[]): any;
    getNick(...args: any[]): any;
    getNicknameGuildsMapping(...args: any[]): any;
    getNicknames(...args: any[]): any;
    getPendingRoleUpdates(...args: any[]): any;
    getSelfMember(...args: any[]): any;
    getSelfMemberJoinedAt(...args: any[]): any;
    getTrueMember(...args: any[]): any;
    initialize(...args: any[]): any;
    isCurrentUserGuest(...args: any[]): any;
    isGuestOrLurker(...args: any[]): any;
    isMember(...args: any[]): any;
    memberOf(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const GuildMemberStore: GuildMemberStore;
