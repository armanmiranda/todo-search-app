import React from "react";
import { useLoaderData } from "react-router-dom";

import TodoItem from "@/components/TodoItem";

import "./todoList.css";

const TodoList = () => {
  const { todos:todoItems } = useLoaderData();

  return (
    <div className="todoList">
      {todoItems.data.map((todoItem) => {
        return (
          <TodoItem
            key={todoItem.id}
            id={todoItem.id}
            title={todoItem.title}
            completed={todoItem.completed} />
        )
      })}
    </div>
  );
}

export default TodoList;
