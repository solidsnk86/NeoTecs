import { Share2Icon } from 'lucide-react';

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
    <section className="relative text-right text-xl">
      <Share2Icon
        className="inline-flex text-xl cursor-pointer hover:opacity-[.6] transition-all"
        title="Compartir"
        onClick={shareButton}
      />
    </section>
  );
}
