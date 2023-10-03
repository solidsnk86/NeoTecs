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
          icon: (
            <Calendar className="inline-flex w-[13px] h-[13px] mr-2 mb-1" />
          ),
        },
      ].map((item) => (
        <p className="text-gray-700 text-sm italic">
          {item.text}
          <span className="inline-flex mx-1">
            {item.date.toLocaleDateString()}
          </span>
          {item.icon}
        </p>
      ))}
    </div>
  );
};
