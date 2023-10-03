import Link from 'next/link';
import { Share2Icon, ArrowUpCircle } from 'lucide-react';

export function ShareButton() {
  const shareButton = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Neotecs Informática',
        text: 'Aprende a configurar tu WiFi en tan solo 5 minutos',
        url: 'https://neotecs.tech',
      });
    }
  };

  return (
    <section className="relative text-right text-xl space-x-4">
      <Link href="#">
        <ArrowUpCircle className="text-white inline-flex cursor-pointer hover:translate-y-[-3px] transition-all" />
      </Link>
      <Share2Icon
        className="inline-flex text-xl cursor-pointer hover:opacity-[.6] transition-all"
        title="Compartir"
        onClick={shareButton}
      />
    </section>
  );
}
