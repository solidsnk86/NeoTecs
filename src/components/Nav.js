import React, { useState, useEffect } from 'react';
import Link from 'next/link';

import { Github, SunMoon } from 'lucide-react';

export const Nav = ({ className }) => {
  const [isDarkMode, setIsLightMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setIsLightMode(savedMode === 'true');
    } else {
      setIsLightMode(
        window.matchMedia('(prefers-color-scheme: light)').matches,
      );
    }
  }, []);

  useEffect(() => {
    document.body.classList.toggle('light', isDarkMode);

    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  return (
    <div className={className || ''}>
      <div className="h-16 flex justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-10 relative text-white">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <img
              src="/images/logos/neotecs-nav-logo.png"
              className="w-20 h-16 mb-3"
              alt="Neo"
            />
          </Link>
        </div>
        <aside className="inline-flex space-x-3">
          <Link
            href="https://github.com/solidsnk86"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.6] hover:transition-all"
          >
            <span className=" px-2 py-1 rounded-full bg-slate-200 font-semibold text-sm text-[#222]">
              Sígueme
            </span>
            <Github className="cursor-pointer w-7 h-7" />
          </Link>
          <SunMoon
            className="inline-flex w-8 h-8 mt-[10px] hover:opacity-[.6] cursor-pointer"
            onClick={toggleDarkMode}
          >
            {isDarkMode ? 'Modo Claro' : 'Modo Oscuro'}
          </SunMoon>
        </aside>
      </div>
    </div>
  );
};
