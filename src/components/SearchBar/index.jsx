import React from "react";
import "./searchForm.css";

const SearchBar = () => {
  return(
    <div className='searchForm'>
      <label htmlFor='searchTodo' className='searchForm-label'>
        Search To Do:
      </label>
      <input
        id='searchTodo'
        name='searchTodo'
        className='searchForm-input'
        type='text' />
    </div>
  )
}

export default SearchBar;
