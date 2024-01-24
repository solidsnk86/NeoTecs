import { useEffect } from 'react';

export const useGAds = async (router) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=AW-371792458';
    script.onload = () => {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        window.dataLayer.push(arguments);
      };
      window.gtag('js', new Date());
      window.gtag('config', 'AW-371792458');
    };
    document.body.appendChild(script);

    router.events.on('routeChangeStart', () => {
      if (!window.gtag) return;
      window.gtag('event', 'page_view');
    });
  }, []);
};
