import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const TodoItemDetail = () => {
  const { todoItem, user }  = useLoaderData();

  if(todoItem.status === 200 && user) {
    return (
      <div>
        <p>Item Number: {todoItem.data.id}</p>
        <p>Creator: {user.data.name}</p>
        <p>Title: {todoItem.data.title}</p>
        <Link to="/">Back</Link>
      </div>
    );
  } else {
    return (
      <div>
        <p>No data found.</p>
        <Link to="/">Back</Link>
      </div>
    );
  }
}

export default TodoItemDetail;
