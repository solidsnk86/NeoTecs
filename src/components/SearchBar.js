import React, { useState } from 'react';
import { Search } from 'lucide-react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <div className="bg-zinc-100 rounded p-[2px]">
      <Search className="w-5 mx-2 inline mb-1 lupa cursor-pointer text-black" />
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder="Buscar documentos"
        className="text-black rounded"
        onKeyDown={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
