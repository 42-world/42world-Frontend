/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { NumberProps } from '@components/pages/articles/common/types';

const CommentCount = ({ totalCount }: NumberProps) => {
  return (
    <div css={commentCountContainerStyle}>
      <h3 css={commentCountStyle}>댓글 {totalCount}개</h3>
    </div>
  );
};

const commentCountContainerStyle = css`
  display: flex;
  flex-direction: row;
`;

const commentCountStyle = css`
  font-size: 0.9rem;
  font-weight: bold;
  margin: 0.2rem 0.5rem 1rem 0;
`;

export default CommentCount;
