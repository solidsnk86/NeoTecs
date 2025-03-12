import { useCallback, useContext, useEffect, useState } from 'react';
import {
  ArrowLeftIcon,
  Home,
  Share,
  Share2,
  Facebook,
  Link2,
  CopyCheck,
} from 'lucide-react';
import { NavSwitch } from './NavSwicth';
import { TitlesContext } from '../shared/TitlesContext';
import { useRouter } from 'next/navigation';
import {
  compartirFacebook,
  compartirTwitter,
  compartirWhatsapp,
  shareText,
} from './Constants';
import { showDialog } from '@/lib/dialog';
import { TwitterIcon } from './Icons/TwitterIcon';
import { WhatsApp } from '@mui/icons-material';

export function NavLinks() {
  const { titles } = useContext(TitlesContext);
  const [selectedSlug, setSelectedSlug] = useState(titles[0]?.slug);
  const [documentTitle, setDocumentTitle] = useState('');
  const [isCopied, setIsCopied] = useState(null);
  const router = useRouter();

  const handleTitleClick = (slug) => {
    setSelectedSlug(slug);
  };

  const navigatorSharer = () => {
    if (navigator.share) {
      navigator.share({
        title: document.title,
        text: shareText,
        url: location.href,
      });
    }
  };

  const copyLink = async () => {
    const link = window.location.href;
    await navigator.clipboard.writeText(link);
    setIsCopied(true);
  };

  const share = useCallback(() => {
    showDialog({
      content: (
        <div className="flex p-5 bg-zinc-200 dark:bg-zinc-900 dark:text-zinc-100 gap-3">
          <h3>Compartir por: </h3>
          <span
            className="cursor-pointer"
            onClick={copyLink}
            title={`${isCopied ? 'Copiado!' : 'Copiar Link'}`}
          >
            {isCopied ? <CopyCheck /> : <Link2 />}
          </span>
          <span className="cursor-pointer" title="Compartir">
            <Share2 onClick={navigatorSharer} />
          </span>
          <span className="cursor-pointer" title="Compartir en Facebook">
            <Facebook onClick={compartirFacebook} />
          </span>
          <span className="cursor-pointer" title="Compartir en X">
            <TwitterIcon onClick={() => compartirTwitter(document.title)} />
          </span>
          <span className="cursor-pointer" title="Compartir por WhatsApp">
            <WhatsApp onClick={compartirWhatsapp} />
          </span>
        </div>
      ),
    });
  }, [isCopied]);

  useEffect(() => {
    if (isCopied) {
      // eslint-disable-next-line no-alert
      alert('Se ha copiado el link!');
    }
  }, [isCopied, share]);

  useEffect(() => {
    setDocumentTitle({
      text: document.title,
    });
  }, []);

  return (
    <div className="hidden w-80 lg:block border-r border-zinc-200 dark:border-zinc-800">
      <div className="sticky top-2">
        <div className="flex gap-4 justify-center mx-auto my-0 z-50">
          <div
            title="Volver"
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <ArrowLeftIcon
              className="text-text-primary"
              onClick={(e) => router.back(e)}
            />
          </div>
          <div
            title="Ir al Inicio"
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <Home
              className="text-text-primary"
              onClick={() => router.push('/')}
            />
          </div>
          <div
            title={`Compartir sección: ${documentTitle.text}`}
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <Share className="text-text-primary" onClick={share} />
          </div>
        </div>
        <NavSwitch />
        <ul className="text-xs h-60 overflow-y-auto scroll-bar overflow-hidden">
          {titles.map((title) => (
            <li className="m-0" key={title.slug}>
              <a
                href={`#${title.slug}`}
                className={`text-[cornflowerblue] py-1 w-full px-2 block hover:bg-zinc-600/35 hover:text-primary font-medium duration-100 ${
                  selectedSlug === title.slug
                    ? ' bg-card-bg text-text-strong bg-opacity-10'
                    : ''
                }`}
                onClick={() => handleTitleClick(title.slug)}
              >
                {title.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
