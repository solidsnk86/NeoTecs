import Link from 'next/link';
import { Share2Icon, ArrowUpCircle } from 'lucide-react';

export function ShareButton() {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Neotecs Informática',
        text: 'Aprende a programar con éste curso gratuito en NeoTecs. Documentación web para aprender diferentes lenguajes de programación y más. También te informo como configurar diferentes equipos inalámbricos WiFi, ¡Echa un vistazo al sitio!',
        url: 'https://neotecs.netlify.app',
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
