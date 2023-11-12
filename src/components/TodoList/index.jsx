import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import TodoItem from "@/components/TodoItem";

import "./todoList.css";

const TodoList = ({ searchString }) => {
  const { todos } = useLoaderData();
  const [todoItems, setTodoItems] = useState(todos?.data || []);

  useEffect(() => {
    const filteredTodoItems = todos.data.filter((todoItem) => {
      return todoItem.title.slice(0, 20).includes(searchString);
    });

    setTodoItems(filteredTodoItems);
  }, [searchString]);

  if(todoItems.length > 0) {
    return (
      <div className="todoList">
        {todoItems.map((todoItem) => {
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
  } else {
    return (
      <p className="todoList-empty">No Todos found!</p>
    )
  }

}

export default TodoList;
