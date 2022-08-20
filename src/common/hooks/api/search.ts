import { useQuery } from 'react-query';
import { ArticleService2 } from '@root/network';
import { Article } from '@network/types/Article';
import { Meta } from '@network/types/Pagination';

export const SEARCH_URL = '/search';
export const SEARCHES_URL = '/searches';

type UseGetSearchResults = (
  query: string,
  categoryId?: number,
  pageNumber?: number,
  enable?: boolean,
) => { isError: boolean; articles: Article[]; meta?: Meta };

export const useGetSearchResults: UseGetSearchResults = (query, categoryId, pageNumber = 1, enable = false) => {
  const { isError, data } = useQuery(
    [SEARCHES_URL, query, categoryId, pageNumber],
    () => ArticleService2.getArticleSearch({ q: query, categoryId, page: pageNumber }),
    {
      enabled: enable,
      cacheTime: 1000,
    },
  );

  return { isError, articles: data?.data ?? [], meta: data?.meta };
};
