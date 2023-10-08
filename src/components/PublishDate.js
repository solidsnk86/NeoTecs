import React from 'react';
import { History } from 'lucide-react';

export const PublishDate = () => {
  const postedtDate = '01 Octubre, 2023';

  return (
    <div>
      {[
        {
          text: 'Publicado ',
          date: postedtDate,
          icon: <History className="inline-flex w-[13px] h-[13px] mr-2 mb-1" />,
        },
      ].map((item) => (
        <p className="text-gray-700 text-sm italic">
          {item.text}
          <span className="inline-flex mx-1">{item.date}</span>
          {item.icon}
        </p>
      ))}
    </div>
  );
};
