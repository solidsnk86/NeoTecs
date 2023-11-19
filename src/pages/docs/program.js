import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { Footer } from '../../components/Footer';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { Introduction } from '../../components/docs/Introduction';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HtmlDoc from '../../components/docs/HtmlDoc';

export default function Program() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-10" />
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

Program.title = '👨‍💻 Curso de programación gratis · NeoTecs';
