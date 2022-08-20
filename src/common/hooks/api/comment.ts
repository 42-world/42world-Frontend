import { CommentService2 } from '@root/network';
import { useQuery } from 'react-query';

export const useGetComments = (articleId: number, page: number, take?: 10) => {
  const { isError, data, refetch } = useQuery(
    ['comments', articleId, page],
    () => CommentService2.getCommentsByArticleId(articleId, page, take),
    {
      cacheTime: 1,
    },
  );

  return { isError, comments: data?.data, meta: data?.meta, refetch };
};
