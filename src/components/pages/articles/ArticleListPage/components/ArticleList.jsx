/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import { useGetCategory } from '@root/common/hooks/api/category';
import { Body } from '@root/components/atoms/Board';
import ArticleListItem from './ArticleListItem';

const ArticleList = ({ articles, categoryId }) => {
  const { categories } = useGetCategory();

  return (
    <Body>
      <ul css={articleListStyle}>
        {articles &&
          articles.map(article => (
            <ArticleListItem key={article.id} article={article} categoryId={categoryId} categories={categories} />
          ))}
      </ul>
    </Body>
  );
};

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
