import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import { getTodo } from "@/api/todos";
import { getUser } from "@/api/user";

const TodoDetailPage = () => {
  const { id } = useParams();
  const [todoItem, setTodoItem] = useState({});
  const [user, setUser] = useState({});

  useEffect(async () => {
    const getTodoApiResponse = await getTodo(id);
    if (getTodoApiResponse.status === 200) {
      const getUserApiResponse = await getUser(getTodoApiResponse.data.userId);
      if(getUserApiResponse.status === 200) {
        setUser(getUserApiResponse.data);
      }
      setTodoItem(getTodoApiResponse.data);
    }
  }, [])

  return (
    <div>
      <p>Item Number: {todoItem.id}</p>
      <p>Creator: {user.name}</p>
      <p>Title: {todoItem.title}</p>
      <Link to="/">Back</Link>
    </div>
  );
}

export default TodoDetailPage;
