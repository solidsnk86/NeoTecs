import React from 'react';
import Link from 'next/link';

export const PublishDate = () => {
  const postedtDate = new Date('01 Octubre 2023').toLocaleDateString('es-Es', {
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  });

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
