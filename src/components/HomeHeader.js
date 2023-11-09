import { Atropos } from 'atropos/react';
import Link from 'next/link';

export const HomeHeader = () => {
  return (
    <div className="bg-gradient-to-b from-primary-dark to-primary-dark -mt-16 border-b-2 border-primary">
      <div className="max-w-screen-lg mx-auto pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <Atropos
          className="atropos-header w-full"
          rotateTouch="scroll-y"
          highlight={false}
        >
          <img
            className="atropos-header-spacer"
            src="/images/header/atropos-bg.svg"
            alt="galaxy"
          />
          <img
            data-atropos-offset="-4.5"
            src="/images/header/space-624054_1920.jpg"
            alt="stars"
          />
          <img
            data-atropos-offset="5"
            src="/images/header/logo-card-space-letter.png"
            alt="neotecs logo"
          />
          <div data-atropos-offset="6" className="atropos-header-button-wrap">
            <Link
              href="/docs"
              className="bg-primary-dark text-white rounded-full px-4 py-2 md:px-8 md:py-4 font-bold md:text-xl inline-flex hover:bg-opacity-70 duration-200 translate-y-full"
            >
              WiFi Config
            </Link>
          </div>
        </Atropos>
      </div>
    </div>
  );
};
