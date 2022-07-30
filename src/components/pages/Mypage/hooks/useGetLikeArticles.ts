import { UserService } from '@root/network';
import { useQuery } from 'react-query';

const useGetLikeArticles = (page: number) => {
  const { isError, data = { data: [] }, refetch } = useQuery(['myLikes'], () => UserService.getLikeArticles(page));

  return { isError, likeArticles: data.data, refetch };
};

export default useGetLikeArticles;
