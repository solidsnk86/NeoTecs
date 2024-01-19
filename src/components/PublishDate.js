import React from 'react';
import FormatDate from './FormatDate';

export const PublishDate = () => {
  return (
    <div className="flex space-x-1">
      {[
        {
          text: 'Publicado ',
          date: FormatDate('01 Octubre 2023'),
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
