// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: ApplicationStreamingStore

export interface ApplicationStreamingStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getActiveStreamForApplicationStream(...args: any[]): any;
    getActiveStreamForStreamKey(...args: any[]): any;
    getActiveStreamForUser(...args: any[]): any;
    getAllActiveStreams(...args: any[]): any;
    getAllActiveStreamsForChannel(...args: any[]): any;
    getAllApplicationStreams(...args: any[]): any;
    getAllApplicationStreamsForChannel(...args: any[]): any;
    getAnyDiscoverableStreamForUser(...args: any[]): any;
    getAnyStreamForUser(...args: any[]): any;
    getCurrentAppIntent(...args: any[]): any;
    getCurrentUserActiveStream(...args: any[]): any;
    getIsActiveStreamPreviewDisabled(...args: any[]): any;
    getLastActiveStream(...args: any[]): any;
    getRTCStream(...args: any[]): any;
    getState(...args: any[]): any;
    getStreamerActiveStreamMetadata(...args: any[]): any;
    getStreamerActiveStreamMetadataForStream(...args: any[]): any;
    getStreamForUser(...args: any[]): any;
    getStreamingState(...args: any[]): any;
    getViewerIds(...args: any[]): any;
    initialize(...args: any[]): any;
    isSelfStreamHidden(...args: any[]): any;
    isStreamMarkedFull(...args: any[]): any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const ApplicationStreamingStore: ApplicationStreamingStore;
