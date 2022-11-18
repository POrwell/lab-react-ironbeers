
function Search({query, setQuery}) {

const handleSearch = event => {
setQuery(event.target.value)
}

  return (
    <>
      <label>Search Beers </label>
      <input value={query} type="text" onChange={handleSearch} />
    </>
  );
}

export default Search;