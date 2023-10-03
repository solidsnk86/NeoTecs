import React from 'react';
import { Calendar } from 'lucide-react';

export const PublishDate = () => {
  const date = '1 de Octubre';
  return (
    <div>
      <p className="text-gray-700 text-sm italic">
        <Calendar className="inline-flex w-[13px] h-[13px] mr-2 mb-1" />
        Publicado el
        <span className="inline-flex mx-1">{date}</span>
      </p>
    </div>
  );
};
