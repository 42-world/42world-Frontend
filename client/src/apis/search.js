import { Instance } from "./index";

export const getSearchArticle = async (query) => {
  const { data } = await Instance.get(`/search/${query.query}`);
  return data;
};
