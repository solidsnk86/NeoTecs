import Link from 'next/link';
import { useRouter } from 'next/router';
import { links } from './Constants';

export const NavSwitch = ({ inline }) => {
  const router = useRouter();

  const isActive = (link) => link.href === router.asPath;

  return (
    <div
      className={`scroll-bar inline-block overflow-hidden mt-4 w-full xl:h-60 xl:overflow-y-auto border-t border-b border-zinc-400 dark:border-zinc-500 z-50 ${
        inline
          ? 'mb-8 lg:hidden w-100% flex overflow-x-scroll overflow-hidden xl:border dark:border-zinc-800 border-gray-800 border-t-0 border-l-0 border-r-0 border-b text-text-primary text-xs z-20 nav-switch'
          : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`xl:p-2 w-full flex duration-100 !no-underline ${
            isActive(link)
              ? 'xl:bg-gradient-to-b from-sky-700 via-sky-800 xl:bg-sky-900 xl:bg-opacity-50 border-b-[3px] border-amber-600 xl:border-none'
              : 'dark:hover:bg-[#202327] hover:bg-[#BDC5CC] hover:opacity-90'
          }`}
        >
          <p className="font-semibold line-clamp-1 px-3 xl:w-auto text-text-primary text-center xl:px-0 xl:line-clamp-none">
            {link.title}
          </p>
        </Link>
      ))}
      <span className="nav-shadow-top"></span>
      <span className="nav-shadow-bottom"></span>
    </div>
  );
};
