// Auto-generated at 2026-07-23T19:21:12.497Z
// Store: AccessibilityStore

export interface AccessibilityStore {
    addChangeListener(...args: any[]): any;
    addConditionalChangeListener(...args: any[]): any;
    addReactChangeListener(...args: any[]): any;
    alwaysShowLinkDecorations: boolean;
    callback(...args: any[]): any;
    colorblindMode: boolean;
    condensePickerWhenNarrow: boolean;
    contrast: number;
    desaturateUserColors: boolean;
    displayNameStylesEnabled: boolean;
    doEmitChanges(...args: any[]): any;
    enableCustomCursor: boolean;
    expressionPickerFormat: string;
    fontScale: number;
    fontScaleClass: string;
    fontSize: number;
    forcedColorsModalSeen: boolean;
    getUserAgnosticState(...args: any[]): any;
    initialize(...args: any[]): any;
    isAppsButtonEnabled: boolean;
    isEmojiButtonEnabled: boolean;
    isFontScaledDown: boolean;
    isFontScaledUp: boolean;
    isGifButtonEnabled: boolean;
    isHighContrastModeEnabled: boolean;
    isMessageGroupSpacingDecreased: boolean;
    isMessageGroupSpacingIncreased: boolean;
    isStickerButtonEnabled: boolean;
    isSubmitButtonEnabled: boolean;
    isSwitchIconsEnabled: boolean;
    isZoomedIn: boolean;
    isZoomedOut: boolean;
    keyboardModeEnabled: boolean;
    keyboardNavigationExplainerModalSeen: boolean;
    lowContrastMode: boolean;
    messageGroupSpacing: number;
    officialMessageStyle: string;
    rawPrefersReducedMotion: string;
    removeAllConditionalChangeListeners(...args: any[]): any;
    removeChangeListener(...args: any[]): any;
    removeReactChangeListener(...args: any[]): any;
    roleStyle: string;
    saturation: number;
    syncForcedColors: boolean;
    syncProfileThemeWithUserTheme: boolean;
    systemForcedColors: string;
    systemPrefersContrast: string;
    systemPrefersCrossfades: boolean;
    systemPrefersReducedMotion: string;
    throttledCallback(...args: any[]): any;
    useForcedColors: boolean;
    useReducedMotion: boolean;
    zoom: number;
}

export declare const AccessibilityStore: AccessibilityStore;
