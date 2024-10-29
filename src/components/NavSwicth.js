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
      className={`scroll-bar inline-block overflow-hidden mt-4 w-full xl:h-60 xl:overflow-y-auto border-t border-b 
      border-zinc-400 dark:border-zinc-500 z-50 ${
        inline
          ? `mb-8 lg:hidden w-[100%] flex overflow-x-scroll overflow-hidden xl:border 
          dark:border-zinc-800 border-gray-800 border-t-0 border-l-0 border-r-0 border-b text-text-primary text-xs z-20 nav-switch`
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
            className={`xl:p-2 w-full flex duration-100 !no-underline z-50 ${
              active
                ? 'xl:bg-gradient-to-b from-sky-600/30 via-sky-700/80 xl:bg-sky-900/50 xl:bg-opacity-50'
                : 'dark:hover:bg-[#202327] hover:bg-[#BDC5CC] hover:opacity-90'
            }`}
          >
            <div className="flex items-center w-auto text-center">
              <button
                className={`font-semibold px-4 py-2 m-4 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-900 
                  border dark:border-zinc-800/50 border-zinc-300/60 
                xl:bg-none xl:w-auto text-white xl:px-0 xl:py-0 xl:border-none xl:shadow-none ${
                  active ? 'shadow-btn' : ''
                }`}
              >
                {link.title}
              </button>
            </div>
          </Link>
        );
      })}
      <span className="nav-shadow-top"></span>
      <span className="nav-shadow-bottom"></span>
    </div>
  );
};

export default NavSwitch;
