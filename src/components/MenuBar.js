import { useState } from 'react';
import SearchBar from './SearchBar';
import DocumentList from './DocumentList';
import documents from '../data/documents';
import Link from 'next/link';

export const MenuBar = () => {
  const [searchResults, setSearchResults] = useState(documents);
  const [query, setQuery] = useState('');

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    const filteredDocuments = documents.filter(
      (document) =>
        document.title.toLowerCase().includes(newQuery.toLowerCase()) ||
        document.content.toLowerCase().includes(newQuery.toLowerCase()),
    );
    setSearchResults(filteredDocuments);
  };

  return (
    <header>
      {[
        {
          title: 'Github',
          link: 'https://github.com/solidsnk86',
        },
        {
          title: 'Blog',
          link: 'https://solidsnk86.netlify.app/blog',
        },
      ].map(() => (
        <Link href={link}>{title}</Link>
      ))}
      <div className="mt-[10px]">
        <SearchBar onSearch={handleSearch} />
        {query && searchResults.length > 0 && (
          <DocumentList documents={searchResults} />
        )}
        {query && searchResults.length === 0 && (
          <p>No hay resultados de búsqueda.</p>
        )}
      </div>
    </header>
  );
};
