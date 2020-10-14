import React, { useCallback, useEffect } from "react";
import { IMethodParam, IPropsUseTrackingCode, ISetIdentity } from "../models";

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
  setPathPageView: (oath: string) => void;
  setTrackPageView: () => void;
  setIdentity: (email: string, customPropertities?: {}) => void;
};

const useTrackingCode = ({
  initialPath,
}: IPropsUseTrackingCode): IUseTrackingCode => {
  const _hsq = window._hsq || [];

  const setTrackPageView = useCallback(() => {
    _hsq.push(["trackPageView"]);
  }, [_hsq]);

  const setPathPageView = useCallback(
    (path: string): void => {
      // This function updates the path
      _hsq.push(["setPath", path]);
      // This function track the current updated page path
      setTrackPageView();
    },
    [_hsq, setTrackPageView]
  );

  const setIdentity = (email: string, customPropertities?: {}) => {
    _hsq.push([
      "identify",
      {
        email,
        ...customPropertities,
      },
    ]);
  };

  /**
   * It should push the set path before
   * the tracking code loads to set the URL
   * that gets tracked for the first page view
   */
  useEffect(() => {
    setPathPageView(initialPath);
  }, [initialPath, setPathPageView]);

  return { setPathPageView, setTrackPageView, setIdentity };
};

export default useTrackingCode;
