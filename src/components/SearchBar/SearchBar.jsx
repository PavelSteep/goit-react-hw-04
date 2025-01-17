import React, { useState } from 'react';
import css from './SearchBar.module.css';

const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };

  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={handleSubmit}>
        <button type="submit" className={css.SearchFormButton}>Search</button>
        <input
          className={css.SearchFormInput}
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Enter query..."
        />
      </form>
    </header>
  );
};

export default SearchBar;
