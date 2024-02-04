import { Nav } from '../../components/Nav';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import { Footer } from '../../components/Footer';
import { FeedbackData } from '../../components/FeedDataFecth';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';

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
