import { ArrowLeftIcon } from 'lucide-react';
import { Footer } from '../../components/Footer';
import { FeedbackData } from '../../components/FeedDataFecth';
import { Nav } from '../../components/Nav';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';

export default function UserFeedback() {
  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      <div className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 xl:left-6 xl:top-14 top-14 left-2 fixed mt-3 hover:border-zinc-300 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300">
        <ArrowLeftIcon
          className="text-text-primary"
          onClick={(e) => history.back(e)}
        />
      </div>
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
