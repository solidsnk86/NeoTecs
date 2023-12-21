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
    <div className={className || 'z-50'}>
      <div className="h-16 flex justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-20 relative text-text-primary">
        <div className="flex relative bottom-[17px]">
          <Link href="/">
            <NeotecsLogo className="cursor-pointer" />
          </Link>
        </div>
        <aside className="flex space-x-3">
          <Link
            href="/docs/feedback"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.9] hover:transition-all"
          >
            <span
              className={`px-2 py-1 rounded-full bg-button-variant font-semibold xl:text-sm text-xs text-text-variant`}
            >
              <MessageCircleIcon className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
              {'Feedback'}
            </span>
          </Link>
          <Link
            href="https://github.com/solidsnk86"
            className="flex items-center space-x-2 mb-3 hover:opacity-[.9] hover:transition-all"
          >
            <span
              className={`px-2 py-1 rounded-full bg-button-variant font-semibold xl:text-sm text-xs text-text-variant`}
            >
              <Github className="inline mb-1 cursor-pointer w-4 h-4 mx-1" />
              {'Github'}
            </span>
          </Link>
        </aside>
      </div>
    </div>
  );
};
