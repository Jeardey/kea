// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: NoteStore

export interface NoteStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    database: any;
    doEmitChanges(...args: any[]): any;
    dualReadValidationDisabled: boolean;
    getNote(...args: any[]): any;
    mode: string;
    recordCreators: any;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    shadowDatabases: any;
    shadowRecordCreators: any;
    state: any;
    stateWrapper(...args: any[]): any;
    wrappedState: any;
}

export declare const NoteStore: NoteStore;
