import React from 'react';
import { DateFormat } from '../lib/date-formatter';

export const PublishDate = () => {
  return (
    <div className="flex space-x-1">
      {[
        {
          text: 'Publicado ',
          date: DateFormat.date('01 Octubre 2023'),
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
