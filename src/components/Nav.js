import Link from 'next/link';

import { Github } from 'lucide-react';

export const Nav = ({ className }) => {
  return (
    <div className={className || ''}>
      <div className="h-16 flex items-center justify-between max-w-screen-xl mx-auto px-4 md:px-8 z-10 relative text-white">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link href="/">
            <img
              src="/images/logos/neotecs-nav-logo.png"
              className="w-20 h-16 mb-3"
              alt="Neo"
            />
          </Link>
        </div>

        <Link
          href="https://github.com/solidsnk86"
          className="flex items-center space-x-4 mb-3"
        >
          <span className=" px-2 py-1 rounded-full bg-slate-200 font-semibold text-sm text-[#222] hover:opacity-[.6] hover:transition-all">
            Sígueme
          </span>
          <Github className="cursor-pointer hover:opacity-[.7] w-7 h-7" />
        </Link>
      </div>
    </div>
  );
};
