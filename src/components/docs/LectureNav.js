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
      <Link href="/" title="Volver al inicio">
        <ArrowLeftIcon className="text-white cursor-pointer hover:translate-x-[-2px] transition-all" />
      </Link>
      <div className="sticky top-4">
        <NavSwitch />
        <ul className="text-sm overflow-y-auto">
          {titles.map((title) => (
            <li key={title.slug}>
              <a
                href={`#${title.slug}`}
                className={`text-[cornflowerblue] px-2 py-1 block rounded hover:bg-[#CCCCCC] hover:bg-opacity-10 hover:text-primary font-medium duration-100 ${
                  selectedSlug === title.slug
                    ? 'bg-[#CCCCCC] bg-opacity-10 text-[#6E51F3]'
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
