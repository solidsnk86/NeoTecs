import { Atropos } from 'atropos/react';
import Link from 'next/link';

export const HomeHeader = () => {
  return (
    <div className="-mt-16">
      <div className="max-w-screen-lg mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <Atropos
          className="atropos-header w-full"
          rotateTouch="scroll-y"
          highlight={true}
        >
          <img
            data-atropos-offset="-3"
            src="/images/header/panal.webp"
            alt="object"
            loading="eager"
          />
          <img
            data-atropos-offset="5"
            src="/images/header/logo-card-space-letter.png"
            alt="neotecs logo"
            loading="eager"
          />
          <div data-atropos-offset="6" className="atropos-header-button-wrap">
            <Link
              href="/docs/program"
              className="elemento-con-sombra text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full hover:brightness-200"
            >
              Vamos a programar
            </Link>
          </div>
        </Atropos>
      </div>
    </div>
  );
};
