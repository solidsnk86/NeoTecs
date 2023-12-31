import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaChevronCircleUp } from 'react-icons/fa';
import { FacebookIcon, Linkedin } from 'lucide-react';
import { TwitterIcon } from './TwitterIcon';
import Link from 'next/link';

export const Footer = () => {
  function compartirFacebook() {
    const encodeU = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u= ${encodeU}`);
  }

  const compartirWhatsapp = () => {
    const winLoc = window.location.href;
    const mensaje = `¡Echa un vistazo a esta web para aprender programación y a configurar tu Wi-Fi!: ${winLoc}`;
    const encodeM = encodeURIComponent(mensaje);
    window.open(`https://wa.me/?text=${encodeM}`);
  };

  const compartirTwitter = () => {
    const encodeUr = encodeURIComponent(window.location.href);
    window.open(`https://twitter.com/share?url=${encodeUr}`);
  };

  const compartirLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    const title = encodeURIComponent(document.title);
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}&title=${title}`;
    window.open(shareUrl, '_blank');
  };

  const compartiTelegram = () => {
    const text = '¡Aprende a configurar tu Wifi en minutos!';
    const url = encodeURIComponent(window.location.href);
    const encodeT = encodeURIComponent(text) + url;
    const telegramLink = `https://t.me/share/url?text=${encodeT}`;

    window.open(telegramLink, '_blank');
  };

  const toTop = () => {
    window.location.href = '#';
  };

  const myUrl = 'https://solidsnk86.netlify.app/';

  const currentYear = new Date().getFullYear();

  return (
    <section className="border-t-2 border-outline text-text-primary mt-14">
      <span className="relative flex justify-center m-auto bg-outline px-[2px] py-[2px] w-fit h-fit rounded-full bottom-[19px]">
        <FaChevronCircleUp
          className="text-text-variant text-[33px] relative cursor-pointer hover:opacity-[.6] transition-all"
          onClick={toTop}
        />
      </span>
      <article className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="text-center font-semibold">Compartir en las redes:</h3>

        <div className="flex items-center justify-center gap-x-6 text-2xl mt-3 mb-9">
          <FacebookIcon
            className="cursor-pointer shadow-icon"
            title="Facebook"
            onClick={() => compartirFacebook()}
          />
          <TwitterIcon
            className="cursor-pointer shadow-icon"
            title="Twitter"
            onClick={() => compartirTwitter()}
          />
          <FaWhatsapp
            className="cursor-pointer shadow-icon"
            title="Whatsapp"
            onClick={() => compartirWhatsapp()}
          />
          <Linkedin
            className="cursor-pointer shadow-icon"
            title="Linked In"
            onClick={() => compartirLinkedIn()}
          />
          <FaTelegramPlane
            className="cursor-pointer shadow-icon"
            title="Telegram"
            onClick={() => compartiTelegram()}
          />
        </div>
        <div className="flex items-center justify-center xl:gap-x-10">
          {[
            { name: 'Contacto', href: 'mailto:calcagni.gabriel86@gmail.com' },
            { name: 'YouTube', href: 'https://www.youtube.com/@tutosNeoTecs' },
            { name: 'GitHub', href: 'https://github.com/solidsnk86' },
            { name: 'Blog', href: 'https://solidsnk86.netlify.app/blog' },
          ].map((link, index) => (
            <aside key={index} className="inline-block mt-3">
              <Link
                href={link.href}
                className="mx-3 items-center hover:underline font-semibold"
              >
                {link.name}
              </Link>
            </aside>
          ))}
        </div>
        <p className="flex justify-center mt-16 font-semibold">
          {currentYear} © NeoTecs · By
          <a href={myUrl} target="_blank" rel="noopener">
            <img
              className="w-16 h-16 relative bottom-6 ml-2 drop-shadow-xl text-[#111] hover:scale-[1.1] transition-all"
              src="/images/neo_pixelart-removebg-preview.png"
              alt="Neo-pixel-art"
              title="Neo"
            />
          </a>
        </p>
      </article>
    </section>
  );
};
