import React from "react";
import "./searchForm.css";

const SearchBar = ({
  searchString,
  handleUpdateSearchString
}) => {
  const handleSearch = (event) => {
    handleUpdateSearchString(event.target.value);
  }

  return(
    <div className='searchForm'>
      <label htmlFor='searchTodo' className='searchForm-label'>
        Search To Do:
      </label>
      <input
        id='searchTodo'
        name='searchTodo'
        className='searchForm-input'
        onChange={handleSearch}
        placeholder="enter keywords to search for"
        value={searchString}
        type='text' />
    </div>
  )
}

export default SearchBar;
