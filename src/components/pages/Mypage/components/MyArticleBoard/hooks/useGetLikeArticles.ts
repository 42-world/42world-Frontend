import { useState } from 'react';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';

const useGetLikeArticles = () => {
  const [page, setPage] = useState(1);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myLikes', page], () => UserService.getLikeArticles(page));

  return { isError, setPage, likeArticles: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetLikeArticles;
