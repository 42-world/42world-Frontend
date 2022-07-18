import { useState } from 'react';

import { useGetComments } from '@root/common/hooks/api/comment';
import CommentCount from './CommentCount';
import CommentInput from './CommentInput';
import CommentsList from './CommentsList';

interface CommentContainerProps {
  articleId: number;
}

const CommentContainer = ({ articleId }: CommentContainerProps) => {
  const [page, setPage] = useState(1);

  const { isError, comments, meta, refetch } = useGetComments(articleId, page);

  return (
    <>
      <CommentCount totalCount={meta?.totalCount || 0} />
      <CommentInput articleId={articleId} setPage={setPage} refetch={refetch} />
      <CommentsList comments={comments} meta={meta} page={page} setPage={setPage} refetch={refetch} />
    </>
  );
};

export default CommentContainer;
