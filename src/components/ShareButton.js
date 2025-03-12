import { CopyCheck, Share2, ShareIcon, Link2, Facebook } from 'lucide-react';
import {
  compartirFacebook,
  compartirTwitter,
  compartirWhatsapp,
  shareText,
} from './Constants';
import { showDialog } from '@/lib/dialog';
import { useCallback, useState, useEffect } from 'react';
import { TwitterIcon } from './Icons/TwitterIcon';
import { WhatsApp } from '@mui/icons-material';

export function ShareButton({ setTitle }) {
  const [isCopied, setIsCopied] = useState(null);
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

  return (
    <div
      title={`Compartir ${setTitle}`}
      className="relative float-right w-fit pt-[3px] px-1 my-6 bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded text-sm hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
      onClick={share}
    >
      <ShareIcon className="inline-flex w-4 h-4 mb-1 mx-1" />
      Compartir
    </div>
  );
}
