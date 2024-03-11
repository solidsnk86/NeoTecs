import React, { useContext, useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { NavSwitch } from './NavSwicth';
import { TitlesContext } from '../shared/TitlesContext';

export function NavLinks() {
  const { titles } = useContext(TitlesContext);
  const [selectedSlug, setSelectedSlug] = useState(titles[0]?.slug);

  const handleTitleClick = (slug) => {
    setSelectedSlug(slug);
  };

  return (
    <div className="w-80 px-4 md:px-8 hidden lg:block">
      <div className="sticky top-4">
        <div className="bg-[#F7F9F9] dark:bg-[#16181C] border-zinc-200/50 dark:border-zinc-800 border rounded p-1 w-fit mt-3 hover:border-zinc-200 dark:hover:border-zinc-600 shadow-md dark:hover:brightness-125 cursor-pointer duration-300">
          <ArrowLeftIcon
            className="text-text-primary"
            onClick={(e) => history.back(e)}
          />
        </div>
        <NavSwitch />
        <ul className="text-xs h-56 overflow-y-auto scroll-bar rounded-xl overflow-hidden">
          {titles.map((title) => (
            <li key={title.slug}>
              <a
                href={`#${title.slug}`}
                className={`text-[cornflowerblue] px-2 py-1 block hover:underline hover:text-primary font-medium duration-100 ${
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
