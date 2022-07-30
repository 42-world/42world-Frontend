import { UserService } from '@root/network';
import { useQuery } from 'react-query';

const useGetMyComments = (page: number) => {
  const {
    isError,
    data = { data: [], meta: { pageCount: 1 } },
    refetch,
  } = useQuery(['myComments', page], () => UserService.getMyComments(page), {
    refetchOnWindowFocus: true,
  });
  // TODO: 댓글 미리보기에서 댓글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, comments: data.data, pageCount: data.meta.pageCount, refetch };
};

export default useGetMyComments;
