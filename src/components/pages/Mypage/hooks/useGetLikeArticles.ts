import { useRecoilValue } from 'recoil';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';
import { mypageCurPageState } from '@root/components/pages/Mypage/store';

const useGetLikeArticles = () => {
  const curPage = useRecoilValue(mypageCurPageState);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myLikes', curPage], () => UserService.getLikeArticles(curPage), {
    refetchOnWindowFocus: false,
    cacheTime: 0,
    staleTime: 0,
  });

  return { isError, likeArticles: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetLikeArticles;
