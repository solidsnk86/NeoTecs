import { Share2Icon } from 'lucide-react';

export function ShareButton({ setTitle }) {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: setTitle,
        text: 'No te pierdas este curso gratuito dodne te enseño a programar con ejemplos y ejercicios prácticos, también incluye tutorial para que entiendsa como configurar tu antena Wifi 📡!!',
        url: window.location.href,
      });
    }
  };

  return (
    <section
      className="relative float-right w-fit px-[3px] py-[1px] rounded-md border dark:border-zinc-700 space-x-4 cursor-pointer hover:opacity-[.6] transition-all text-primary"
      onClick={shareButton}
    >
      <Share2Icon className="inline-flex w-5 h-5 mb-1 mx-1" title="Compartir" />
      Compartir
    </section>
  );
}
