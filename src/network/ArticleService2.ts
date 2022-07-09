import { apiClient } from './APIType';
import { GetArticleSearchRequest, GetArticleSearchResponse } from './types/Article';

const ARTICLE_SEARCH_URL = '/articles/search';

const getArticleSearch = async ({
  q,
  categoryId,
  take = 10,
  page = 1,
  order = 'DESC',
}: GetArticleSearchRequest): Promise<GetArticleSearchResponse> => {
  const { data } = await apiClient.get<GetArticleSearchResponse>(ARTICLE_SEARCH_URL, {
    params: { q, categoryId, take, page, order },
  });
  return data;
};

export default { ARTICLE_SEARCH_URL, getArticleSearch };
