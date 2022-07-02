import { useQuery } from 'react-query';
import ArticleService2 from '@network/ArticleService2';

export const SEARCH_URL = '/search';
export const SEARCHES_URL = '/searches';

export const getSearchResults = (query: string, enable: boolean = false) => {
  const { isError, data } = useQuery([SEARCHES_URL, query], () => ArticleService2.getArticleSearch({ q: query }), {
    enabled: enable,
  });

  return { isError, articles: data?.data ?? [] };
};
