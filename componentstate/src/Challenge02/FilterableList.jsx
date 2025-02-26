import { useState } from 'react';
import { foods, filterItems } from './data.js';
import SearchBar from './SearchBar.jsx';
import List from './List.jsx';

export default function FilterableList() {
    const [query, setQuery] = useState('');
    const results = filterItems(foods,query);
    function handleChange(e) {
      setQuery(e.target.value);
    }
  return (
    <>
      <SearchBar query ={query} handleChange={handleChange}/>
      <hr />
      <List items={results} />
    </>
  );
}