import Link from 'next/link';
import { Bug, Github, MessageCircleIcon } from 'lucide-react';
import { NeotecsLogo } from './NeotecsLogo';

const navItems = [
  {
    href: 'https://github.com/solidsnk86/NeoTecs/issues/new',
    title: 'Reporte de bichos',
    icon: Bug,
    label: 'Reporta Bugs',
    target: '_blank',
  },
  {
    href: '/docs/feedback',
    title: 'Feedback',
    icon: MessageCircleIcon,
    label: 'Feedback',
  },
  {
    href: 'https://github.com/solidsnk86',
    title: 'Github',
    icon: Github,
    label: 'Github',
    target: '_blank',
  },
];

const NavItem = ({ href, title, icon: Icon, label, target }) => (
  <Link
    href={href}
    target={target}
    className="flex items-center space-x-2 mb-3 hover:opacity-[.9] transition-all"
  >
    <span
      className="hidden sm:flex items-center px-[3px] pt-[2px] rounded-md border bg-card text-text-primary hover:bg-bg-card hover:border-zinc-400 dark:border-zinc-800 duration-100 font-semibold xl:text-sm text-xs"
      title={title}
    >
      <Icon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
      {label}
    </span>
    <span
      className="sm:hidden flex items-center px-[3px] pt-[2px] rounded-md border bg-card text-text-primary dark:border-zinc-800 font-semibold xl:text-sm text-xs"
      title={title}
    >
      <Icon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
    </span>
  </Link>
);

export const Nav = ({ className }) => {
  return (
    <div
      className={`${className} z-50 px-4 h-12 w-full md:relative fixed
      border-b border-zinc-200 dark:border-zinc-900 bg-background-color flex justify-between text-text-primary`}
    >
      <div className="relative bottom-[17px]">
        <Link href="/" title="Inicio">
          <NeotecsLogo className="cursor-pointer hover:scale-110 transition-all duration-300" />
        </Link>
      </div>
      <aside className="flex space-x-3 mt-3">
        {navItems.map((item) => (
          <NavItem key={crypto.randomUUID()} {...item} />
        ))}
      </aside>
    </div>
  );
};
