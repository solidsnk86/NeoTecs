import React from 'react';
import { Clock } from 'lucide-react';

export const PublishDate = () => {
  const date = '1 de Octubre';
  return (
    <div>
      <p className="text-gray-700">
        <Clock className="inline-flex w-4 h-4 mr-2 mb-1" />
        Publicado el
        <span className="inline-flex mx-1">{date}</span>
      </p>
    </div>
  );
};
