/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { Viewer } from '@toast-ui/react-editor';

import { ArticleProps } from '@components/pages/articles/common/types';
import ArticleLike from './ArticleLike';

const ArticleContent = ({ article }: ArticleProps) => (
  <div css={articleContentStyle}>
    <Viewer initialValue={article.content} />
    <ArticleLike article={article} />
  </div>
);

const articleContentStyle = css`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export default ArticleContent;
