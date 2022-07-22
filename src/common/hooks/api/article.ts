import { useQuery, useQueryClient } from 'react-query';
import { ArticleService } from '@root/network';
import { Article } from '@network/types/Article';
import { Meta } from '@network/types/Pagination';

export const ARTICLE_URL = '/article';
export const ARTICLES_URL = '/articles';

type GetArticles = (
  categoryId: number,
  pageNumber?: number,
  enable?: boolean,
) => { isError: Boolean; articles: Article[]; meta?: Meta };

export const useGetArticles: GetArticles = (categoryId, pageNumber = 1, enable = true) => {
  const { isError, data } = useQuery(
    [ARTICLES_URL, categoryId, pageNumber],
    () => ArticleService.getArticlesByCategoryId(categoryId, pageNumber, 10),
    { enabled: enable },
  );

  return { isError, articles: data?.data ?? [], meta: data?.meta };
};

type GetArticle = (
  articleId: number,
  enable?: boolean,
) => {
  isError: Boolean;
  article: Article;
  remove: () => void;
};

export const useGetArticleById: GetArticle = (articleId, enable = true) => {
  const { isError, data, remove } = useQuery(
    [ARTICLES_URL, articleId],
    () => ArticleService.getArticleById(articleId),
    {
      retry: false,
      enabled: enable,
    },
  );

  return {
    isError,
    article: data,
    remove,
  };
};
