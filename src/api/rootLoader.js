import { getTodos } from "./todos"

export const rootLoader = async () => {
  const getTodosReponse = await getTodos();

  return { todos: getTodosReponse }
}
