/**
 * The methods allowed by HubSpot tracking code
 */
export type IMethodParam =
  | "setPath"
  | "trackPageView"
  | "identify"
  | "trackEvent"
  | "revokeCookieConsent"
  | "addPrivacyConsentListener"
  | "doNotTrack"
  | "addIdentityListener"
  | "refreshPageHandlers";

/**
 * The props to the main hook
 */
export type IPropsUseTrackingCode = {
  initialPath: string;
};

/**
 * The props to track event function
 */
export type IPropsUseSetTrackEvent = {
  eventId: string;
  value?: number | string;
};
