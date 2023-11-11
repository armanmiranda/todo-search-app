import React from 'react';
import SearchBar from '@/components/SearchBar';
import TodoList from '@/components/TodoList';

const TopPage = () => {
  return(
    <>
      <SearchBar />
      <TodoList />
    </>
  );
}

export default TopPage;
