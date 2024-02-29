import Link from 'next/link';
import { Github, MessageCircleIcon } from 'lucide-react';
import { useState, useRef, useEffect } from 'react';
import { useIsomorphicLayoutEffect } from './hooks/useIsomorphicLayoutEffect';
import { NeotecsLogo } from './NeotecsLogo';

function updateColorTheme() {
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark', 'changing-theme');
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme');
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme');
  });
}

function toggleTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark', 'changing-theme')
  } else {
    document.documentElement.classList.remove('dark', 'changing-theme')
  }
  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme')
  })
}

export const Nav = ({ className }) => {
  const [setting, setSetting] = useState('system');
  const initial = useRef(true);

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme;
    if (theme === 'light' || theme === 'dark') {
      setSetting(theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (setting === 'system') {
      localStorage.removeItem('theme');
    } else if (setting === 'light' || setting === 'dark') {
      localStorage.theme = setting;
    }
    if (initial.current) {
      initial.current = false;
    } else {
      updateColorTheme();
    }
  }, [setting]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateColorTheme);

    function onStorage() {
      updateColorTheme();
      const theme = localStorage.theme;
      if (theme === 'light' || theme === 'dark') {
        setSetting(theme);
      } else {
        setSetting('system');
      }
    }
    window.addEventListener('storage', onStorage);

    return () => {
      mediaQuery.removeEventListener('change', updateColorTheme);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return (
    <div
      className={
        className ||
        'z-50 relative border-b border-zinc-200 dark:border-zinc-800'
      }
    >
      <div className="h-12 bg-background-color flex justify-between max-w-screen-xl mx-auto px-4 md:px-8 relative text-text-primary">
        <div className="flex relative bottom-[17px]">
          <Link href="/" title="Inicio">
            <NeotecsLogo className="cursor-pointer hover:scale-110 transition-all duration-300" />
          </Link>
        </div>
        <aside className="flex space-x-3 mt-3">
          <Link
            href="/docs/feedback"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all"
          >
            <span
              className={`px-[3px] pt-[2px] rounded-md border bg-button-variant text-text-variant dark:border-zinc-700 font-semibold xl:text-sm text-xs`}
              title="Feedback"
            >
              <MessageCircleIcon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
              Feedback
            </span>
          </Link>
          <Link
            href="https://github.com/solidsnk86"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.8] hover:transition-all"
          >
            <span
              className={`px-[3px] pt-[2px] rounded-md border bg-button-variant text-text-variant dark:border-zinc-700 font-semibold xl:text-sm text-xs`}
              title="Github"
            >
              <Github className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
              Github
            </span>
          </Link>
        </aside>
      </div>
    </div>
  );
};
