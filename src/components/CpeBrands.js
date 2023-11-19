import Link from 'next/link';
import { useRouter } from 'next/router';
import { TpLinkIcon } from './TpLinkIcon';
import { UbiquitiIcon } from './UbiquitiIcon';
import { MikrotikIcon } from './MikrotikIcon';

export const CpeBrands = ({ inline }) => {
  const router = useRouter();

  const links = [
    {
      href: '/docs',
      icon: <TpLinkIcon className="tplink-icon w-10 h-10" />,
    },
    {
      href: '/docs/ubiquiti',
      icon: <UbiquitiIcon className="ubiquiti-icon w-10 h-10" />,
    },
    {
      href: '/docs/mikrotik',
      icon: <MikrotikIcon className="mikrotik-icon w-10 h-10" />,
    },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`flex mb-4 border border-zinc-800 rounded overflow-hidden w-100% ${
        inline ? 'mb-8 lg:hidden w-100% inline-flex justify-center' : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`p-2 w-full flex justify-center items-center duration-100 ${
            isActive(link)
              ? 'bg-[#484848]'
              : 'hover:bg-[#7a7a7a] hover:opacity-90'
          }`}
          title={link.title}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
