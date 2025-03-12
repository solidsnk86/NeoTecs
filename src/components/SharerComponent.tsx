import { showDialog } from '@/lib/dialog';
import { Facebook, WhatsApp } from '@mui/icons-material';
import { Share, Share2 } from 'lucide-react';
import { TwitterIcon } from './Icons/TwitterIcon';

export const SharerComponent = ({
  setTitle,
  setText,
  setUrl,
  className,
}: {
  setTitle: string;
  setText: string;
  setUrl: string;
  className: string | null;
}) => {
  const navigatorSharer = () => {
    navigator.share({
      title: setTitle,
      text: setText,
      url: setUrl,
    });
  };
  const share = () => {
    showDialog({
      content: (
        <>
          <p>Compartí cagón!!</p>
          <Share2 onClick={navigatorSharer} />
          <WhatsApp />
          <Facebook />
          <TwitterIcon />
        </>
      ),
    });
  };
  return (
    <div
      className={className}
      onClick={share}
      title={`Compartir artículo: ${setTitle}`}
    >
      <Share className="w-[14px] h-[14px] text-text-primary mx-2 translate-y-[0.5px] inline" />
    </div>
  );
};
