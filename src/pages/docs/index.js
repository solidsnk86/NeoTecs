import { Nav } from '../../components/Nav';
import { Footer } from '../../components/Footer';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { DocsNav } from '../../components/DocsNav';
import { BrandsSwitch } from '../../components/BrandsSwitch';

import { TpLinkDocs } from '../../components/docs/TpLinkDocs';

export default function Docs() {
  return (
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
  );
}
Docs.title = 'NeoTecs · Tp Link';
