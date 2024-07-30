import { Nav } from '../../components/Nav';
import { NavLinks } from '../../components/NavLinks';
import { Footer } from '../../components/Footer';
import { NavSwitch } from '../../components/NavSwicth';
import { Introduction } from './Introduction';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HtmlDoc from './HtmlDoc';

export default function Program() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl flex items-stretch">
        <NavLinks />
        <div className="w-full max-w-none prose px-4 md:px-8">
          <NavSwitch inline />
          <Introduction />
          <HtmlDoc />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}

Program.title = '👨‍💻 Aprende programación en NeoTecs!';
