import { Instance } from "./index";

export const getRecentBoardArticleList = async () => {
  const { data } = await Instance.get("/board/main");
  if (data.error) {
    return;
  } else {
    return data;
  }
};

export const getBoardList = async () => {
  const { data } = await Instance.get("/board/list");
  if (!Array.isArray(data)) {
    return;
  }
  return data;
};

export const getBoardArticleList = async (params) => {
  const { data } = await Instance.get(`/board/${params.slug}`);
  return data;
};
