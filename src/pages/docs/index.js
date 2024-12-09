import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { DocsNav } from '../../components/DocsNav';
import { BrandsSwitch } from '../../components/BrandsSwitch';
import { TpLinkDocs } from '../../components/docs/TpLinkDocs';
import { useState, useEffect } from 'react';

export default function Docs() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = document.documentElement.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const scrollFraction = scrollTop / (scrollHeight - clientHeight);
      const scrollWidth = Math.min(Math.max(scrollFraction * 100, 0), 100);
      setWidth(scrollWidth);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        style={{
          width: `${width}%`,
          height: '6px',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          background:
            'linear-gradient(to right, #a855f7, #ff6699, #3b82f6, #a855f7, #ff6699)',
          backgroundSize: '200% 100%',
        }}
      />
      <TitlesContextProvider>
        <Nav className="fixed w-full h-12 z-10" />
        <div className="max-w-screen-xl flex items-stretch">
          <DocsNav />
          <div className="w-full max-w-none prose px-4 md:px-8">
            <BrandsSwitch inline />
            <TpLinkDocs />
          </div>
        </div>
        <Footer />
      </TitlesContextProvider>
    </>
  );
}
Docs.title = 'NeoTecs · Tp Link';
