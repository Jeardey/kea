// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: GuildScheduledEventStore

export interface GuildScheduledEventStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActiveEventByChannel(...args: any[]): any;
    getGuildEventCountByIndex(...args: any[]): any;
    getGuildScheduledEvent(...args: any[]): any;
    getGuildScheduledEventsByIndex(...args: any[]): any;
    getGuildScheduledEventsForGuild(...args: any[]): any;
    getRsvp(...args: any[]): any;
    getRsvpVersion(...args: any[]): any;
    getUserCount(...args: any[]): any;
    getUsersForGuildEvent(...args: any[]): any;
    hasUserCount(...args: any[]): any;
    initialize(...args: any[]): any;
    isActive(...args: any[]): any;
    isInterestedInEventRecurrence(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
}

export declare const GuildScheduledEventStore: GuildScheduledEventStore;
