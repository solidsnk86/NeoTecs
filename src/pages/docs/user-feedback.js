import { Nav } from '../../components/Nav';
import { LectureNav } from '../../components/docs/LectureNav';
import { NavSwitch } from '../../components/docs/NavSwicth';
import { SectionTitle } from '../../components/SectionTitle';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';

import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import { FeedbackData } from '../../components/FeedDataFecth';

export default function UserFeedback() {
  return (
    <TitlesContextProvider>
      <Nav className="backdrop-blur-md bg-transparent fixed xl:relative w-full h-12 z-50" />
      <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
        <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
          <HeaderTitle>Feedback de los usuarios</HeaderTitle>
          <hr className="border-text-primary" />
          <Indextitle>Comentarios:</Indextitle>
          <FeedbackData />
        </div>
      </div>
      <Footer />
    </TitlesContextProvider>
  );
}
