import React from 'react';
import { Introduction } from './Introduction';

export const WebProgram = () => {
  const LectureTitle = ({ Tag = 'h2', children }) => {
    return (
      <Tag className="text-lg text-slate-100 font-bold sm:text-5xl mb-10 antialiased">
        {children}
      </Tag>
    );
  };
  return (
    <>
      <LectureTitle>Lectura 0</LectureTitle>
      <Introduction />
    </>
  );
};
