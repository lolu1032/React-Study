export default function SearchBar({query,handleChange}) {
  
    return (
      <label>
        Search:{' '}
        <input
          value={query}
          onChange={handleChange}
        />
      </label>
    );
  }