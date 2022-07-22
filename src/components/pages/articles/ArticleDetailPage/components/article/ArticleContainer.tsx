/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleContent from './ArticleContent';
import { ArticleProps } from '@components/pages/articles/common/types';

const ArticleContainer = ({ article }: ArticleProps) => {
  return (
    <div css={articleContainerStyle}>
      <ArticleDetailHeader article={article} />
      <ArticleContent article={article} />
    </div>
  );
};

const articleContainerStyle = css`
  width: 100%;
  background-color: #fff;
  border-radius: 0.3rem;
`;

export default ArticleContainer;
