import Link from 'next/link';
import { TpLinkIcon } from '../components/Icons/TpLinkIcon';
import { UbiquitiIcon } from '../components/Icons/UbiquitiIcon';
import { MikrotikIcon } from '../components/Icons/MikrotikIcon';

export const CpeBrands = ({ inline }) => {
  const links = [
    {
      href: '/docs',
      icon: (
        <TpLinkIcon className="tplink-icon w-10 h-10 disabled:cursor-not-allowed" />
      ),
      title: 'Tp - Link',
    },
    {
      href: '/docs/ubiquiti',
      icon: (
        <UbiquitiIcon className="ubiquiti-icon w-10 h-10 disabled:cursor-not-allowed" />
      ),
      title: 'Ubiquiti',
    },
    {
      href: '/docs/mikrotik',
      icon: (
        <MikrotikIcon className="mikrotik-icon w-10 h-10 disabled:cursor-not-allowed" />
      ),
      title: 'Mikrotik',
    },
  ];

  return (
    <div
      className={`flex mb-4 border-zinc-800 rounded overflow-hidden w-100% shadow-md shadow-[#dad9d9] dark:shadow-[#000] ${
        inline ? 'mb-8 lg:hidden w-100% inline-flex justify-center' : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className="p-2 w-full flex justify-center items-center duration-100 dark:hover:bg-zinc-900 hover:bg-zinc-100"
          title={link.title}
        >
          {link.icon}
        </Link>
      ))}
    </div>
  );
};
