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
      className="relative text-right space-x-4 text-lg cursor-pointer hover:opacity-[.6] transition-all text-primary"
      onClick={shareButton}
    >
      Compartir
      <Share2Icon className="inline-flex text-xl mx-1" title="Compartir" />
    </section>
  );
}
