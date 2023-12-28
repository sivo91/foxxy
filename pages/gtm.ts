
// Inside your page or component file
import { useEffect } from 'react';

const GTM_ID = 'GTM-WLVZD4K5'; 

declare global {
  interface Window {
    dataLayer: any[];
  }
}

const GtmComponent = () => {
  useEffect(() => {
    const scriptId = 'google-tag-manager';

    if (document.getElementById(scriptId)) {
      return;
    }

    const script = document.createElement('script');
    script.id = scriptId;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
    };

    document.head.appendChild(script);
  }, []);

  return null;
};

export default GtmComponent;
