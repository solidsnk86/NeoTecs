import React from 'react';
import { Calendar } from 'lucide-react';

export const PublishDate = () => {
  const currentDate = new Date();

  return (
    <div>
      {[
        {
          text: 'Publicado el ',
          date: currentDate,
        },
      ].map((item) => (
        <p className="text-gray-700 text-sm italic">
          {item.text}
          <span className="inline-flex mx-1">
            {item.date.toLocaleDateString()}
          </span>
          <Calendar className="inline-flex w-[13px] h-[13px] mr-2 mb-1" />
        </p>
      ))}
    </div>
  );
};
