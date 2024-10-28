import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from './Constants';

export const NavSwitch = ({ inline }) => {
  const router = useRouter();
  const containerRef = useRef(null);
  const activeItemRef = useRef(null);

  const isActive = (link) => link.href === router.asPath;

  const scrollActiveIntoView = () => {
    if (containerRef.current && activeItemRef.current) {
      const container = containerRef.current;
      const activeItem = activeItemRef.current;

      // Get container dimensions
      const containerHeight = container.clientHeight;

      // Get active item dimensions
      const itemTop = activeItem.offsetTop;
      const itemHeight = activeItem.clientHeight;

      // Calculate the center position
      const targetScroll = itemTop - (containerHeight - itemHeight) / 2;

      // Scroll the container
      container.scrollTo({
        top: targetScroll,
        behaivor: 'auto',
      });
    }
  };

  useEffect(() => {
    scrollActiveIntoView();
  }, [router.asPath]);

  return (
    <div
      ref={containerRef}
      id="container-nav"
      className={`scroll-bar inline-block overflow-hidden mt-4 w-full xl:h-60 xl:overflow-y-auto border-t border-b border-zinc-400 dark:border-zinc-500 z-50 ${
        inline
          ? 'mb-8 lg:hidden w-100% flex overflow-x-scroll overflow-hidden xl:border dark:border-zinc-800 border-gray-800 border-t-0 border-l-0 border-r-0 border-b text-text-primary text-xs z-20 nav-switch'
          : ''
      }`}
    >
      {links.map((link) => {
        const active = isActive(link);
        return (
          <Link
            href={link.href}
            key={link.href}
            ref={active ? activeItemRef : null}
            className={`xl:p-2 w-full flex duration-100 !no-underline ${
              active
                ? 'xl:bg-gradient-to-b from-sky-700 via-sky-800 xl:bg-sky-900 xl:bg-opacity-50 border-b-[3px] border-amber-600 xl:border-none'
                : 'dark:hover:bg-[#202327] hover:bg-[#BDC5CC] hover:opacity-90'
            }`}
          >
            <p className="font-semibold line-clamp-1 px-3 xl:w-auto text-text-primary text-center xl:px-0 xl:line-clamp-none">
              {link.title}
            </p>
          </Link>
        );
      })}
      <span className="nav-shadow-top"></span>
      <span className="nav-shadow-bottom"></span>
    </div>
  );
};

export default NavSwitch;
