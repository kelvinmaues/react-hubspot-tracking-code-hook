import { IMethodParam, IPropsUseSetTrackEvent } from "../models";

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
  setContentType: (contentType: string) => void;
  setPathPageView: (path: string) => void;
  setTrackPageView: () => void;
  setIdentity: (email: string, customPropertities?: {}) => void;
  setTrackEvent: ({ eventId, value }: IPropsUseSetTrackEvent) => void;
};

const useTrackingCode = (): IUseTrackingCode => {
  const _hsq = typeof window !== 'undefined' && window._hsq ? window._hsq : [];

  const setContentType = (contentType: string): void => {
    _hsq.push(["setContentType", contentType]);
  };

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

  const setTrackEvent = ({ eventId, value }: IPropsUseSetTrackEvent) => {
    _hsq.push([
      "trackEvent",
      {
        id: eventId,
        value,
      },
    ]);
  };

  return { setContentType, setPathPageView, setTrackPageView, setIdentity, setTrackEvent };
};

export default useTrackingCode;
