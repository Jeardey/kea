// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: MFAStore

export interface MFAStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    doEmitChanges(...args: any[]): any;
    getBackupCodes(...args: any[]): any;
    getNonces(...args: any[]): any;
    getVerificationKey(...args: any[]): any;
    hasSeenBackupPrompt: boolean;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    togglingSMS: boolean;
}

export declare const MFAStore: MFAStore;
