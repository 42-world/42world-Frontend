/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { ArticleProps } from '@components/pages/articles/common/types';
import { getCreatedAt } from '@components/pages/articles/common/utils';

const ArticleDetailInfo = ({ article }: ArticleProps) => {
  return (
    <h3 css={articleDetailInfoStyle}>
      <div>⏱ {getCreatedAt(article.createdAt)}</div>
      <div>👀 {article.viewCount}</div>
      <div>💬 {article.likeCount}</div>
    </h3>
  );
};

const articleDetailInfoStyle = css`
  display: flex;
  gap: 12px;
`;

export default ArticleDetailInfo;
