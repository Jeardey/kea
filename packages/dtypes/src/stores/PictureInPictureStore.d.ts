// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: PictureInPictureStore

export interface PictureInPictureStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    callback(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getDockedRect(...args: any[]): any;
    getState(...args: any[]): any;
    initialize(...args: any[]): any;
    isEmbeddedActivityHidden(...args: any[]): any;
    isFrameHidden(...args: any[]): any;
    isOpen(...args: any[]): any;
    pipActivityWindow: any;
    pipFrameWindow: any;
    pipHavenWindow: any;
    pipVideoWindow: any;
    pipWidth(...args: any[]): any;
    pipWindow: any;
    pipWindows: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    throttledCallback(...args: any[]): any;
}

export declare const PictureInPictureStore: PictureInPictureStore;
