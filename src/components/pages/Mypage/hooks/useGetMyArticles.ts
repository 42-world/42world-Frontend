import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';
import { mypageCurPageState } from '@components/pages/Mypage/store';

const useGetMyArticles = () => {
  const curPage = useRecoilValue(mypageCurPageState);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myArticles', curPage], () => UserService.getMyArticles(curPage), {
    refetchOnWindowFocus: true,
  }); // TODO: 게시글 미리보기에서 게시글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, articles: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetMyArticles;
