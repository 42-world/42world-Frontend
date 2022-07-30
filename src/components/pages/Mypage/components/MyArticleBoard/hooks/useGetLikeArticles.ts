import { UserService } from '@root/network';
import { useQuery } from 'react-query';

const useGetLikeArticles = (page: number) => {
  const {
    isError,
    data = { data: [], meta: { pageCount: 1 } },
    refetch,
  } = useQuery(['myLikes', page], () => UserService.getLikeArticles(page));

  return { isError, likeArticles: data.data, pageCount: data.meta.pageCount, refetch };
};

export default useGetLikeArticles;
