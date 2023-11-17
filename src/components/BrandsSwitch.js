import Link from 'next/link';
import { useRouter } from 'next/router';

export const BrandsSwitch = ({ inline }) => {
  const router = useRouter();
  const links = [
    {
      href: '/docs',
      icon: '/images/logos/TP-LINK_logo.svg',
      title: 'TP - Link',
    },
    {
      href: '/docs/ubiquiti',
      icon: '/images/logos/Ubiquiti_Logo.png',
      title: 'Ubiquiti',
    },
    {
      href: '/docs/mikrotik',
      icon: '/images/logos/MikroTik_Logo_(2022).svg',
      title: 'MikroTik',
    },
  ];
  const isActive = (link) => link.href === router.asPath;
  return (
    <div
      className={`inline-block mb-4 border border-zinc-800 rounded overflow-hidden mt-16 w-100% ${
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
              : 'hover:bg-[#484848] hover:opacity-90'
          }`}
          title={link.title}
        >
          <img className="w-100% h-10 !m-0" src={link.icon} alt={link.title} />
        </Link>
      ))}
    </div>
  );
};
