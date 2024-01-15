import Link from 'next/link';
import { useRouter } from 'next/router';
import { TpLinkIcon } from '../components/Icons/TpLinkIcon';
import { UbiquitiIcon } from '../components/Icons/UbiquitiIcon';
import { MikrotikIcon } from '../components/Icons/MikrotikIcon';

export const CpeBrands = ({ inline }) => {
  const router = useRouter();

  const links = [
    {
      href: '/docs',
      icon: <TpLinkIcon className="tplink-icon w-10 h-10" />,
      title: 'Tp - Link',
    },
    {
      href: '/docs/ubiquiti',
      icon: <UbiquitiIcon className="ubiquiti-icon w-10 h-10" />,
      title: 'Ubiquiti',
    },
    {
      href: '/docs/mikrotik',
      icon: <MikrotikIcon className="mikrotik-icon w-10 h-10" />,
      title: 'Mikrotik',
    },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`flex mb-4 border-zinc-800 rounded overflow-hidden w-100% shadow-md shadow-black ${
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
