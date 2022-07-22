/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
import { Article } from '@root/network/types/Article';
import { getCategoryName, useGetCategory } from '@common/hooks/api/category';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleContent from './ArticleContent';

interface ArticleContainer {
  article: Article;
}

const ArticleContainer = ({ article }: ArticleContainer) => {
  const { categories } = useGetCategory();
  const categoryName = getCategoryName(article?.categoryId, categories);
  return (
    <div css={articleContainerStyle}>
      <ArticleDetailHeader article={article} categoryName={categoryName} />
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
