import { useState } from 'react';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';

const useGetMyArticles = () => {
  const [page, setPage] = useState(1);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myArticles', page], () => UserService.getMyArticles(page), {
    refetchOnWindowFocus: true,
  }); // TODO: 게시글 미리보기에서 게시글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, setPage, articles: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetMyArticles;
