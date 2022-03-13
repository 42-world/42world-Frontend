import axios from "../../node_modules/axios/index";
import { Instance } from ".";

export const uploadImage = async ({ file }) => {
  const formData = new FormData();
  formData.append("file", file);
  const { data } = await Instance.post("/upload/image", formData);
  return data;
};
