import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';
import { mypageCurPageState } from '@root/components/pages/Mypage/store';

const useGetMyComments = () => {
  const curPage = useRecoilValue(mypageCurPageState);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myComments', curPage], () => UserService.getMyComments(curPage), {
    refetchOnWindowFocus: true,
    cacheTime: 0,
    staleTime: 0,
  });
  // TODO: 댓글 미리보기에서 댓글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, comments: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetMyComments;
