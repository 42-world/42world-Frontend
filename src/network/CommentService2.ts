import { Pagination } from './types/Pagination';
import { apiClient } from './APIType';
import { Comment } from './types/Comment';

const COMMENTS_URL = (articleId: number) => `/articles/${articleId}/comments`;

type GetCommentsByArticleId = (
  articleId: number,
  page?: number,
  take?: number,
  order?: 'ASC' | 'DESC',
) => Promise<Pagination<Comment>>;

const getCommentsByArticleId: GetCommentsByArticleId = async (articleId, page, take, order = 'DESC') => {
  const res = await apiClient.get(COMMENTS_URL(articleId), {
    params: {
      order,
      page,
      take,
    },
  });

  return res.data;
};

export default { COMMENTS_URL, getCommentsByArticleId };
