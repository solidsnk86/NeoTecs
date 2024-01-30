import { ShareIcon } from 'lucide-react';

export function ShareButton({ setTitle }) {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: setTitle,
        text: 'No te pierdas este curso gratuito donde te enseño a programar con ejemplos y ejercicios prácticos, también incluye tutorial para que entiendas como configurar tu antena Wifi 📡!!',
        url: window.location.href,
      });
    }
  };

  return (
    <section
      title="Compartir"
      className="relative float-right w-fit pt-[3px] px-1 my-6 rounded-md bg-button-variant text-text-variant shadow-sm shadow-zinc-100/95 dark:!shadow space-x-4 cursor-pointer hover:opacity-[.8] transition-all text-primary text-sm font-semibold"
      onClick={shareButton}
    >
      <ShareIcon className="inline-flex w-4 h-4 mb-1 mx-1" />
      Compartir
    </section>
  );
}
