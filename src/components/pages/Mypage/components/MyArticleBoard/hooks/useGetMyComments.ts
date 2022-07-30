import { useState } from 'react';
import { useQuery } from 'react-query';

import { UserService } from '@root/network';

const useGetMyComments = () => {
  const [page, setPage] = useState(1);
  const {
    isError,
    data = { data: [], meta: { maxPage: 1 } },
    refetch,
  } = useQuery(['myComments', page], () => UserService.getMyComments(page), {
    refetchOnWindowFocus: true,
  });
  // TODO: 댓글 미리보기에서 댓글 모음 페이지로 넘어갈 때 refetch 필요성?

  return { isError, setPage, comments: data.data, maxPage: data.meta.pageCount, refetch };
};

export default useGetMyComments;
