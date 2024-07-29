import React from 'react';
import {
  compartirFacebook,
  compartiTelegram,
  compartirLinkedIn,
  compartirTwitter,
  compartirWhatsapp,
  portfolioUrl,
} from '../components/Constants';
import { FaWhatsapp, FaTelegramPlane, FaChevronCircleUp } from 'react-icons/fa';
import { FacebookIcon, Linkedin } from 'lucide-react';
import { TwitterIcon } from '../components/Icons/TwitterIcon';
import Link from 'next/link';
import Tracker from '../components/utils/tracker';

export const Footer = () => {
  return (
    <section className="border-t-2 border-outline text-text-primary">
      <span className="relative flex justify-center m-auto bg-outline px-[2px] py-[2px] w-fit h-fit rounded-full bottom-[19px]">
        <FaChevronCircleUp
          className="text-text-variant text-[33px] relative cursor-pointer hover:opacity-[.9] transition-all"
          onClick={() => window.location.href('#')}
        />
      </span>
      <article className="max-w-screen-xl mx-auto px-4 md:px-8">
        <h3 className="text-center font-semibold">Compartir en las redes:</h3>
        <div className="flex items-center justify-center gap-x-8 text-2xl mt-3 mb-9">
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
            { name: 'Contacto', href: 'mailto:tutosneotecs@gmail.com' },
            { name: 'YouTube', href: 'https://www.youtube.com/@tutosNeoTecs' },
            { name: 'GitHub', href: 'https://github.com/solidsnk86' },
            { name: 'Blog', href: 'https://twitter.com/CalcagniGabriel' },
            {
              name: (
                <>
                  <span className="sm:hidden">Políticas</span>
                  <span className="hidden sm:block">
                    Políticas y Privacidad
                  </span>
                </>
              ),
              href: '/docs/politicas-privacidad',
            },
          ].map((link) => (
            <aside
              key={link.href}
              className="inline-block mt-3 xl:text-sm text-xs"
            >
              <Link
                href={link.href}
                className="mx-3 items-center hover:underline underline-offset-2 font-semibold"
              >
                {link.name}
              </Link>
            </aside>
          ))}
        </div>
        <p className="flex justify-center text-sm mt-16 font-semibold">
          2023 © NeoTecs · By
          <a href={portfolioUrl} target="_blank" rel="noopener">
            <img
              className="w-16 h-16 relative bottom-6 ml-2 text-[#111] hover:scale-[1.2] transition-all duration-500 solidSnk86"
              src="https://raw.githubusercontent.com/solidsnk86/CV_GEC/master/solidsnk86.png"
              alt="Solid Snake en pixelart"
              title="SolidSnk86"
            />
          </a>
        </p>
      </article>
      <p className="text-center text-xs pb-2">
        Todos los nombres de productos, logos y marcas son propiedad de sus
        respectivos creadores.
      </p>
      <Tracker />
    </section>
  );
};
