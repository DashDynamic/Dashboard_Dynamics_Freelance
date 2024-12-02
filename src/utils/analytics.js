import ReactGA from "react-ga";

// Initialize Google Analytics
export const initGA = (trackingId) => {
  ReactGA.initialize(trackingId);
};

// Track page views
export const logPageView = () => {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
