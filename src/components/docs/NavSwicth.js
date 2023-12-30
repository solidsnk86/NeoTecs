import Link from 'next/link';
import { useRouter } from 'next/router';

export const NavSwitch = ({ inline }) => {
  const router = useRouter();

  const links = [
    {
      href: '/docs/program',
      title: 'Html',
    },
    {
      href: '/docs/css',
      title: 'Css',
    },
    {
      href: '/docs/git',
      title: 'Git',
    },
    {
      href: '/docs/python',
      title: 'Python',
    },
    {
      href: '/docs/django',
      title: 'Django',
    },
    {
      href: '/docs/javascript',
      title: 'Javascript',
    },
    {
      href: '/docs/sql',
      title: 'SQL ',
    },
    {
      href: '/docs/ui-ux',
      title: 'UI/UX',
    },
    {
      href: '/docs/test',
      title: 'CI/DI',
    },
    {
      href: '',
      title: 'Escalabilidad',
    },
    {
      href: '/docs/scraping',
      title: 'Web Scraping',
    },
    {
      href: '/docs/markdown-render',
      title: 'MarkDown Render',
    },
    {
      href: '/docs/google-sheets',
      title: 'Google Sheets',
    },
    {
      href: '/docs/testing',
      title: 'Pruebas CI/CD',
    },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`scroll-bar inline-block mb-4 border border-slate-400 border-opacity-20 xl:rounded-xl rounded-b-xl overflow-hidden mt-16 xl:w-[200px] w-100% xl:h-60 xl:overflow-y-auto ${
        inline
          ? 'mb-8 lg:hidden w-100% flex overflow-x-scroll border-none text-text-primary text-xs gap-1 z-20 nav-switch'
          : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`p-1 xl:p-2 w-full flex duration-100 !no-underline ${
            isActive(link)
              ? 'xl:bg-[cornflowerblue] xl:bg-opacity-50 border-orange-400 border-b-4 xl:border-none'
              : 'dark:hover:bg-[#202327] hover:bg-[#BDC5CC] hover:opacity-90'
          }`}
        >
          <h3
            className="font-semibold text-text-primary line-clamp-1 xl:line-clamp-none tooltip"
            data-tooltip={link.title}
          >
            {link.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};
