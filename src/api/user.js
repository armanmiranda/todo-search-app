import { USER_API } from "@/utils/constants";

export const getUser = async (id) => {
  const response = await fetch(`${USER_API}/${id}`);

  if(response.status === 200) {
    const data = await response.json();
    return { status: response.status, data };
  } else {
    return { status: response.status, message: "Server Error.", data: {} };
  }
}
