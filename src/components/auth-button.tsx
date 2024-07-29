'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { Github } from 'lucide-react';

export default function AuthButton() {
  const supabase = createClientComponentClient();

  const handleSigIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: 'http://localhost:3000/auth/callback',
      },
    });
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className=" space-x-4">
      <button
        onClick={handleSigIn}
        className="border border-zinc-900 px-4 py-1 rounded-md bg-[#010409] text-gray-300 font-semibold shadow-md shadow-black"
      >
        <span className="bg-[#ffffff] rounded-full pt-[2px] px-[1px] mr-[6px] text-[#010409] items-center">
          <Github className="w-5 h-5 inline fill-[#010409] " />
        </span>
        Sign In
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </header>
  );
}
