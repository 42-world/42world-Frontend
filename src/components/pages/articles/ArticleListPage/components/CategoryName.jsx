/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';
import { css } from '@emotion/react';

import { getCategoryName } from '@root/common/hooks/api/category';

const CategoryName = ({ article, categories }) => {
  return (
    <Link key={`category_${article.categoryId}`} to={`/category/${article.categoryId}`}>
      <h3 css={categoryName}>{getCategoryName(categories, article.categoryId)}</h3>
    </Link>
  );
};

const categoryName = css`
  font-size: 0.75rem;
  font-weight: 400;
  color: #424242;
  margin: 0.5rem 0.5rem -0.3rem 0.9rem;
  width: max-content;
  text-decoration: none;
`;

export default CategoryName;
