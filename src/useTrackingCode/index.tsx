import { IMethodParam } from "../models";

/**
 * TODO:
 * [] - Add function addPrivacyConsentListener to check consent status of the visitor
 * [] - Add function revokeCookieConsent to remove the consent status of the visitor
 * [] - Add function doNotTrack to prevent all tracking by the HubSpot tracking code
 */

export type IPushParams = [IMethodParam, (string | object)?];

declare global {
  interface Window {
    _hsq: { push: (callParam: IPushParams) => void };
  }
}

/**
 * The shape of the hook
 */
export type IUseTrackingCode = {
  setPathPageView: (path: string) => void;
  setTrackPageView: () => void;
  setIdentity: (email: string, customPropertities?: {}) => void;
};

const useTrackingCode = (): IUseTrackingCode => {
  const _hsq = window._hsq || [];

  const setTrackPageView = () => {
    _hsq.push(["trackPageView"]);
  };

  const setPathPageView = (path: string): void => {
    // This function updates the path
    _hsq.push(["setPath", path]);
    // This function track the current updated page path
    setTrackPageView();
  };

  const setIdentity = (email: string, customPropertities?: {}) => {
    _hsq.push([
      "identify",
      {
        email,
        ...customPropertities,
      },
    ]);
  };

  return { setPathPageView, setTrackPageView, setIdentity };
};

export default useTrackingCode;
