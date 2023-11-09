import Link from 'next/link';
import { Share2Icon, ArrowUpCircle } from 'lucide-react';

export function ShareButton() {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Neotecs Informática',
        text: 'Aprende a configurar tu WiFi en tan solo 5 minutos. Documentación web de para CPE inalámbros de diferentes marcas.',
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
