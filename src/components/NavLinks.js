import React, { useContext, useState } from 'react';
import { ArrowLeftIcon, Home, Share } from 'lucide-react';
import { NavSwitch } from './NavSwicth';
import { TitlesContext } from '../shared/TitlesContext';
import { useRouter } from 'next/navigation';

export function NavLinks() {
  const { titles } = useContext(TitlesContext);
  const [selectedSlug, setSelectedSlug] = useState(titles[0]?.slug);
  const router = useRouter();

  const handleTitleClick = (slug) => {
    setSelectedSlug(slug);
  };

  return (
    <div className="hidden w-80 lg:block border-r border-zinc-200 dark:border-zinc-800">
      <div className="sticky top-2">
        <div className="flex gap-4 justify-center mx-auto my-0">
          <div
            title="Volver atrás"
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <ArrowLeftIcon
              className="text-text-primary"
              onClick={(e) => router.back(e)}
            />
          </div>
          <div
            title="Ir al Inicio"
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <Home
              className="text-text-primary"
              onClick={() => router.push('/')}
            />
          </div>
          <div
            title="Volver atrás"
            className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300"
          >
            <Share
              className="text-text-primary"
              onClick={(e) => router.back(e)}
            />
          </div>
        </div>
        <NavSwitch />
        <ul className="text-xs h-56 overflow-y-auto scroll-bar overflow-hidden">
          {titles.map((title) => (
            <li key={title.slug}>
              <a
                href={`#${title.slug}`}
                className={`text-[cornflowerblue] mb-1 w-full px-2 block hover:underline hover:text-primary font-medium duration-100 ${
                  selectedSlug === title.slug
                    ? ' bg-card-bg text-text-strong bg-opacity-10'
                    : ''
                }`}
                onClick={() => handleTitleClick(title.slug)}
              >
                {title.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
