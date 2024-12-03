// Initialize Google Analytics
export const initGA = (measurementId) => {
  // Load the Google Analytics script
  const script1 = document.createElement("script");
  script1.async = true;
  script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script1);

  // Initialize dataLayer and gtag function
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    window.dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", measurementId);

  // Make gtag available globally
  window.gtag = gtag;
};

// Log page views
export const logPageView = () => {
  if (window.gtag) {
    window.gtag("event", "page_view", {
      page_path: window.location.pathname + window.location.search,
    });
  }
};
