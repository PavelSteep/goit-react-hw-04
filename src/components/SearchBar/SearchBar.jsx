import React, { useState } from 'react';
import './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className="SearchBar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <button type="submit" className="SearchForm-button">Поиск</button>
        <input
          className="SearchForm-input"
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Введите запрос..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
