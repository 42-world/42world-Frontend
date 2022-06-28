import { useQuery } from 'react-query';
import { ArticleService2 } from 'network';

export const SEARCH_URL = '/search';
export const SEARCHES_URL = '/searches';

export const getSearchResults = (query: string) => {
  const { isError, data } = useQuery([SEARCHES_URL, query], () => ArticleService2.getArticleSearch({ q: query }));

  return { isError, articles: data?.data ?? [] };
};
