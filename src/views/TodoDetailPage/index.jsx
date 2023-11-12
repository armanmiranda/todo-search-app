import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const TodoDetailPage = () => {
  const { todoItem, user } = useLoaderData();

  return (
    <div>
      <p>Item Number: {todoItem.data.id}</p>
      <p>Creator: {user.data.name}</p>
      <p>Title: {todoItem.data.title}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default TodoDetailPage;
