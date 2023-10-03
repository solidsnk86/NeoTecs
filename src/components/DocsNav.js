import React, { useContext, useState } from 'react';
import { TitlesContext } from '../shared/TitlesContext';
import { BrandsSwitch } from './BrandsSwitch';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export function DocsNav() {
  const { titles } = useContext(TitlesContext);
  const [selectedSlug, setSelectedSlug] = useState(titles[0]?.slug);

  const handleTitleClick = (slug) => {
    setSelectedSlug(slug);
  };

  return (
    <div className="w-80 px-4 md:px-8 hidden lg:block">
      <Link href={'/'}>
        <ArrowLeftIcon className="text-white cursor-pointer" />
      </Link>
      <div className="sticky top-4">
        <BrandsSwitch />
        <ul className="text-sm">
          {titles.map((title) => (
            <li key={title.slug}>
              <a
                href={`#${title.slug}`}
                className={`text-[cornflowerblue] px-2 py-1 block rounded hover:bg-[#CCCCCC] hover:bg-opacity-10 hover:text-primary font-medium duration-100 ${
                  selectedSlug === title.slug
                    ? 'bg-[#CCCCCC] bg-opacity-10 text-text-strong'
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
