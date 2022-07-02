import { useQuery } from 'react-query';
import { ArticleService } from 'network';

export const ARTICLE_URL = '/article';
export const ARTICLES_URL = '/articles';

export const getArticles = categoryId => {
  const { isError, data } = useQuery([ARTICLES_URL, categoryId], () =>
    ArticleService.getArticlesByCategoryId(categoryId, 1, 10),
  );

  console.log(data);

  return { isError, articles: data?.data ?? [] };
};
