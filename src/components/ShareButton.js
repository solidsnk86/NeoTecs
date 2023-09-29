import { FaShareAlt } from 'react-icons/fa';

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
      <FaShareAlt
        className="inline-flex text-xl cursor-pointer hover:opacity-[.6] transition-all"
        title="Compartir"
        onClick={shareButton}
      />
    </section>
  );
}
