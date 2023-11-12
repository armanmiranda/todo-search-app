import { getTodo } from "./todos";
import { getUser } from "./user";

export const todoItemLoader = async ({ params }) => {
  let response = { todoItem: undefined, user: undefined };

  const getTodoResponse = await getTodo(params.id);
  response = {...response, todoItem: getTodoResponse};

  if (getTodoResponse.status === 200) {
    const getUserResponse = await getUser(getTodoResponse.data.userId);
    response = {...response, user: getUserResponse};
  }


  return response;
};
