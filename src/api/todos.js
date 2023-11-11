import { TODO_API } from "@/utils/constants";

export const getTodos = async () => {
  const response = await fetch(TODO_API);

  if(response.status === 200) {
    const data = await response.json();
    return { status: response.status, data };
  } else {
    return { status: response.status, message: "Server Error."};
  }
}
