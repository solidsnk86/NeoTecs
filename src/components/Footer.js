import React from 'react';
import { FaWhatsapp, FaTelegramPlane, FaChevronCircleUp } from 'react-icons/fa';
import { FacebookIcon, TwitterIcon, Linkedin } from 'lucide-react';

export const Footer = () => {
  function compartirFacebook() {
    const encodeU = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u= ${encodeU}`);
  }

  const compartirWhatsapp = () => {
    const winLoc = window.location.href;
    const mensaje = `¡Echa un vistazo a esta web para aprender a configurar tu WiFi!: ${winLoc}`;
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
    <section className=" bg-footer-bg border-t-2 text-white mt-14">
      <span className="relative flex justify-center m-auto bg-[#E5E7EB] px-[2px] py-[2px] w-fit h-fit rounded-full bottom-[19px]">
        <FaChevronCircleUp
          className="text-[#333] text-[33px] relative cursor-pointer hover:text-[#575757] transition-all"
          onClick={toTop}
        />
      </span>
      <article className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="text-center ">Compartir en las redes:</h3>

        <div className="flex items-center justify-center gap-x-6 text-2xl mt-3">
          <FacebookIcon
            className="cursor-pointer hover:opacity-[.6]"
            title="Facebook"
            onClick={() => compartirFacebook()}
          />
          <TwitterIcon
            className="cursor-pointer hover:opacity-[.6]"
            title="Twitter"
            onClick={() => compartirTwitter()}
          />
          <FaWhatsapp
            className="cursor-pointer hover:opacity-[.6]"
            title="Whatsapp"
            onClick={() => compartirWhatsapp()}
          />
          <Linkedin
            className="bx bxl-linkedin cursor-pointer hover:opacity-[.6]"
            title="Linked In"
            onClick={() => compartirLinkedIn()}
          />
          <FaTelegramPlane
            className="bx bxl-telegram cursor-pointer hover:opacity-[.6]"
            title="Telegram"
            onClick={() => compartiTelegram()}
          />
        </div>

        <p className="flex justify-center mt-16">
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
