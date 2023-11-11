import React from "react";
import "./todoItem.css";

const TodoItem = ({ id, title, completed }) => {
  const markAsCompleted = completed ? 'done' : 'in-progress';

  return(
    <div className={`todoItem todoItem--${markAsCompleted}`}>
      <p className="todoItem-id">#{id}</p>
      <p className="todoItem-title">{title.slice(0, 20)}</p>
    </div>
  );
}

export default TodoItem;
