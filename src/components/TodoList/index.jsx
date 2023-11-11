import React, { useEffect, useState } from "react";

import TodoItem from "@/components/TodoItem";
import { getTodos } from "@/api/todos";

import "./todoList.css";

const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(async () => {
    // TODO: Add error handling later
    const apiResponse = await getTodos();
    if(apiResponse.status === 200) {
      setTodoItems(apiResponse.data);
    }
  }, []);

  return (
    <div className="todoList">
      {todoItems.map((todoItem) => {
        return (
          <TodoItem
            id={todoItem.id}
            title={todoItem.title}
            completed={todoItem.completed} />
        )
      })}
    </div>
  );
}

export default TodoList;
