import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const DocumentList = ({ documents }) => {
  return (
    <ul className="bg-zinc-300/15 rounded p-3 w-1/2 relative">
      {documents.map((document) => (
        <li key={document.href}>
          <Link className="underline flex" href={`/docs/${document.href}`}>
            <h3>{document.title}</h3>{' '}
            <ArrowRight className="inline w-4 mx-1 mt-[1px]" />
          </Link>
          <p>{document.content}</p>
        </li>
      ))}
    </ul>
  );
};

export default DocumentList;
