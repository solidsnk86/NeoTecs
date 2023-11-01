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
      href: '/docs/javascript',
      title: 'Javascript',
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
      href: '/docs/sql',
      title: 'SQL, Modelos y Migraciones',
    },
    {
      href: 'docs/ui',
      title: 'Interfaz de Usuario',
    },
    {
      href: '/docs/test',
      title: 'Pruebas (Testing)CI/DI',
    },
    {
      href: '',
      title: 'Escalabilidad y Seguridad',
    },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`inline-block mb-4 border border-slate-400 border-opacity-20 rounded overflow-hidden mt-16 w-100% xl:h-60 xl:overflow-y-auto scroll-style ${
        inline
          ? 'mb-8 lg:hidden w-100% flex overflow-x-scroll border-none text-xs gap-1 z-20 nav-switch'
          : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`p-1 xl:p-2 w-full flex duration-100 ${
            isActive(link)
              ? 'xl:bg-[#484848] border-orange-300 border-b-4 xl:border-none'
              : 'hover:bg-[#CCCCCC] hover:bg-opacity-10'
          }`}
          title={link.title}
        >
          <h3 className="font-semibold text-slate-100 line-clamp-1 xl:line-clamp-none">
            {link.title}
          </h3>
        </Link>
      ))}
    </div>
  );
};
