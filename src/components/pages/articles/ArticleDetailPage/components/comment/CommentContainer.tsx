/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
import { useGetComments } from '@root/common/hooks/api/comment';
import CommentCount from './CommentCount';
import CommentInput from './CommentInput';
import CommentsList from './CommentsList';
import { useGetArticleById } from '@root/common/hooks/api/article';
import { Category } from '@root/network/types/Category';

interface CommentContainerProps {
  articleId: number;
}

const CommentContainer = ({ articleId }: CommentContainerProps) => {
  const [page, setPage] = useState(1);

  const { isError, comments, meta, refetch } = useGetComments(articleId, page);
  const { article } = useGetArticleById(articleId);
  const { isCommentReadable, isCommentWritable } = article.category;

  return (
    <>
      {isCommentReadable && (
        <div css={commentContainerStyle}>
          <CommentCount totalCount={meta?.totalCount || 0} />
          {isCommentWritable && <CommentInput articleId={articleId} setPage={setPage} refetch={refetch} />}
          <CommentsList comments={comments} meta={meta} page={page} setPage={setPage} refetch={refetch} />
        </div>
      )}
    </>
  );
};

const commentContainerStyle = css`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  border-radius: 0.3rem;
`;

export default CommentContainer;
