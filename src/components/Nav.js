import Link from 'next/link';
import { Bug, Github, MessageCircleIcon, MoonStarIcon } from 'lucide-react';
import { NeotecsLogo } from './NeotecsLogo';

export const Nav = ({ className }) => {
  return (
    <div
      className={`${className} z-50 px-4 h-12 w-full md:relative fixed border-b border-zinc-200 dark:border-zinc-800 bg-background-color flex justify-between text-text-primary`}
    >
      <div className="relative bottom-[17px]">
        <Link href="/" title="Inicio">
          <NeotecsLogo className="cursor-pointer hover:scale-110 transition-all duration-300" />
        </Link>
      </div>
      <aside className="flex space-x-3 mt-3">
        <button className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all">
          <span
            className="px-[3px] pt-[2px] hidden sm:block rounded-md border bg-card text-text-primary hover:bg-bg-card hover:border-zinc-400 dark:border-zinc-700 duration-100 font-semibold xl:text-sm text-xs"
            title="Reporte de bichos"
          >
            <MoonStarIcon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
            Dark
          </span>
          <span
            className="px-[3px] pt-[2px] sm:hidden rounded-md border bg-card text-text-primary dark:border-zinc-700 font-semibold xl:text-sm text-xs"
            title="Reporte de bichos"
          >
            <Bug className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
          </span>
        </button>
        <Link
          href="https://github.com/solidsnk86/NeoTecs/issues/new"
          className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all"
          target="_blank"
        >
          <span
            className="px-[3px] pt-[2px] hidden sm:block rounded-md border bg-card text-text-primary hover:bg-bg-card hover:border-zinc-400 dark:border-zinc-700 duration-100 font-semibold xl:text-sm text-xs"
            title="Reporte de bichos"
          >
            <Bug className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
            Reporta Bugs
          </span>
          <span
            className="px-[3px] pt-[2px] sm:hidden rounded-md border bg-card text-text-primary dark:border-zinc-700 font-semibold xl:text-sm text-xs"
            title="Reporte de bichos"
          >
            <Bug className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
          </span>
        </Link>
        <Link
          href="/docs/feedback"
          className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all"
        >
          <span
            className="px-[3px] pt-[2px] hidden sm:block rounded-md border bg-card text-text-primary hover:bg-bg-card hover:border-zinc-400 dark:border-zinc-800 duration-100 font-semibold xl:text-sm text-xs"
            title="Feedback"
          >
            <MessageCircleIcon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
            Feedback
          </span>
          <span
            className="px-[3px] pt-[2px] sm:hidden rounded-md border bg-card text-text-primary dark:border-zinc-800 font-semibold xl:text-sm text-xs"
            title="Feedback"
          >
            <MessageCircleIcon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
          </span>
        </Link>
        <Link
          href="https://github.com/solidsnk86"
          className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all"
        >
          <span
            className="px-[3px] pt-[2px] hidden sm:block rounded-md border bg-card text-text-primary hover:bg-bg-card hover:border-zinc-400 dark:border-zinc-800 duration-100 font-semibold xl:text-sm text-xs"
            title="Github"
          >
            <Github className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
            Github
          </span>
          <span
            className="px-[3px] pt-[2px] sm:hidden rounded-md border bg-card text-text-primary dark:border-zinc-700 font-semibold xl:text-sm text-xs"
            title="Github"
          >
            <Github className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
          </span>
        </Link>
      </aside>
    </div>
  );
};
