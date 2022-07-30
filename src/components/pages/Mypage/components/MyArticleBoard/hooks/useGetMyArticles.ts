import { UserService } from '@root/network';
import { useQuery } from 'react-query';

const useGetMyArticles = (page: number) => {
  const {
    isError,
    data = { data: [], meta: { pageCount: 1 } },
    refetch,
  } = useQuery(['myArticles', page], () => UserService.getMyArticles(page), {
    refetchOnWindowFocus: true,
  }); // TODO: 게시글 미리보기에서 게시글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, articles: data.data, pageCount: data.meta.pageCount, refetch };
};

export default useGetMyArticles;
