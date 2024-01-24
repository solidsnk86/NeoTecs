import Link from 'next/link';
import React, { useContext, useState } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import { NavSwitch } from './NavSwicth';
import { TitlesContext } from '../../shared/TitlesContext';

export function LectureNav() {
  const { titles } = useContext(TitlesContext);
  const [selectedSlug, setSelectedSlug] = useState(titles[0]?.slug);

  const handleTitleClick = (slug) => {
    setSelectedSlug(slug);
  };

  return (
    <div className="w-80 px-4 md:px-8 hidden lg:block">
      <div className="sticky top-4">
        <span onClick={(e) => history.back(e)} title="Volver atrás">
          <ArrowLeftIcon className="text-text-primary cursor-pointer hover:translate-x-[-2px] transition-all" />
        </span>
        <NavSwitch />
        <ul className="text-xs h-56 overflow-y-auto scroll-bar border dark:border-zinc-800 border-gray-800 rounded-xl">
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
