/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useGetCategory } from '@root/common/hooks/api/category';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles, categoryId }) => {
  const { categories } = useGetCategory();

  return (
    <div css={articleListWrapperStyle}>
      <ul css={articleListStyle}>
        {articles &&
          articles.map(article => (
            <ArticleListItem key={article.id} article={article} categoryId={categoryId} categories={categories} />
          ))}
      </ul>
    </div>
  );
};

const articleListWrapperStyle = css`
  padding: 5px 0;
  width: 100%;
  max-width: 1100px;
  margin: auto;
`;

const articleListStyle = css`
  padding-left: 0;
  margin: 0;
  li {
    padding-top: 9px;
    list-style: none;
    display: flex;
    span {
      display: inline-block;
      line-height: 20px;
      color: #222;
    }
  }
`;

export default ArticleList;
