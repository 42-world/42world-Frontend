import { UserService } from '@root/network';
import { useQuery } from 'react-query';

const useGetLikeArticles = (page: number) => {
  const { isError, data, refetch } = useQuery(['myLikes'], () => UserService.getLikeArticles);
};

export default useGetLikeArticles;
