import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/LectureNav';
import { Footer } from '../../components/Footer';
import { NavSwitch } from '../../components/NavSwicth';
import { Introduction } from './Introduction';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HtmlDoc from './HtmlDoc';

export default function Program() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <LectureNav />
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

Program.title = '👨‍💻 Curso de programación gratis en NeoTecs';
