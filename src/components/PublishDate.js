import React from 'react';
import Link from 'next/link';
import { History } from 'lucide-react';

export const PublishDate = () => {
  const postedtDate = '01 Octubre, 2023';

  const BackHome = [{ link: 'Inicio', href: '/' }];

  return (
    <div className="flex space-x-1">
      {BackHome.map((i) => (
        <Link key={i.link} href={i.href} className="no-underline">
          <p className="text-gray-700 text-sm italic antialiased">{i.link}</p>
        </Link>
      ))}
      {[
        {
          text: '· Publicado, ',
          date: postedtDate,
          icon: (
            <History className="inline-flex w-[13px] h-[13px] mr-2 mb-[2px]" />
          ),
        },
      ].map((item) => (
        <p className="text-gray-700 text-sm italic antialiased">
          {item.text}
          <span className="inline-flex mx-1">{item.date}</span>
          {item.icon}
        </p>
      ))}
    </div>
  );
};
