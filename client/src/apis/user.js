import { Instance } from "./index";

export const addUser = async (params) => {
  try {
    const { data } = await Instance.post("/user/create", params);
    console.log(data);
    return data;
  } catch ({ response }) {
    return response.data;
  }
};

export const tryLogin = async (params) => {
  try {
    const result = await Instance.post("/user/login", params);
    return result.data;
  } catch ({ response }) {
    return response.data;
  }
};
