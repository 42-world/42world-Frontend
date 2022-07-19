/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
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
    <div css={commentContainerStyle}>
      <CommentCount totalCount={meta?.totalCount || 0} />
      <CommentInput articleId={articleId} setPage={setPage} refetch={refetch} />
      <CommentsList comments={comments} meta={meta} page={page} setPage={setPage} refetch={refetch} />
    </div>
  );
};

const commentContainerStyle = css`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: ${theme.boxShadow};
  border-radius: 0.3rem;
`;

export default CommentContainer;
