import React, { useState } from 'react';
import SearchBar from '@/components/SearchBar';
import TodoList from '@/components/TodoList';

const TopPage = () => {
  const [searchString, setSearchString] = useState('');

  return(
    <>
      <SearchBar
        handleUpdateSearchString={setSearchString}
        searchString={searchString} />
      <TodoList searchString={searchString} />
    </>
  );
}

export default TopPage;
