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

  const isActive = (link) => link.href === router.pathname;
  return (
    <div
      className={`inline-block mb-4 bg-[#FFFFFF] dark:bg-[#09090B] border border-slate-400 border-opacity-20 shadow-md shadow-slate-500 dark:!shadow xl:rounded-xl rounded-b-xl overflow-hidden mt-16 xl:w-[200px] w-100% xl:overflow-y-auto description-videos ${
        inline ? 'mb-8 lg:hidden w-100% inline-flex justify-center' : ''
      }`}
    >
      {links.map((link) => (
        <Link
          href={link.href}
          key={link.href}
          className={`p-2 w-full flex justify-center items-center duration-100 ${
            isActive(link)
              ? 'xl:bg-[cornflowerblue] xl:bg-opacity-50 border-orange-400 border-b-4 xl:border-none'
              : 'dark:hover:bg-[#202327] hover:bg-[#BDC5CC] hover:opacity-90'
          }`}
          title={link.title}
        >
          <img
            className="w-100% h-10 !m-0"
            src={link.icon}
            alt={link.title}
            title={link.title}
          />
        </Link>
      ))}
    </div>
  );
};
