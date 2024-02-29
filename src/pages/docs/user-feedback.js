import { useState } from 'react';
import { Footer } from '../../components/Footer';
import { FeedbackData } from '../../components/FeedDataFecth';
import { Nav } from '../../components/Nav';
import { TitlesContextProvider } from '../../components/TitlesContextProvider';
import HeaderTitle from '../../components/HeaderTitlte';
import Indextitle from '../../components/IndexTitle';
import LoginForm from './login';

export default function UserFeedback({ user }) {
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);

  const handleCloseModal = () => {
    setLoginModalOpen(false);
  };

  return (
    <TitlesContextProvider>
      <Nav className="fixed xl:relative w-full h-12 z-50" />
      {user ? (
        <div className="max-w-screen-xl mx-auto flex items-stretch py-16">
          <div className="w-full max-w-none prose px-4 md:px-8 text-text-primary">
            <HeaderTitle>Feedback de los usuarios</HeaderTitle>
            <hr className="border-text-primary" />
            <Indextitle>Comentarios:</Indextitle>
            <FeedbackData />
          </div>
        </div>
      ) : (
        <LoginForm onClose={handleCloseModal} />
      )}
      <Footer />
    </TitlesContextProvider>
  );
}
