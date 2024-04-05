import { ShareIcon } from 'lucide-react';
import { shareText } from './Constants';

export function ShareButton({ setTitle }) {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: setTitle,
        text: shareText,
        url: window.location.href,
      });
    }
  };

  return (
    <div
      title={`Compartir ${setTitle}`}
      className="relative float-right w-fit pt-[3px] px-1 my-6 bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded text-sm hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
      onClick={shareButton}
    >
      <ShareIcon className="inline-flex w-4 h-4 mb-1 mx-1" />
      Compartir
    </div>
  );
}
