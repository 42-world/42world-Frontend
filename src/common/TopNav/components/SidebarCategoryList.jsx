/** @jsxImportSource @emotion/react */

import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';

import { theme } from '@styles/theme';

const SidebarCategoryList = () => {
  const { isError, categories } = useGetCategory();
  return (
    <div css={sidebarCategoryListStyle}>
      <div css={sidebarCategoryListTitleStyle}>커뮤니티</div>
      <div css={sidebarCategoryListItemsStyle}>
        {categories &&
          categories.map(item => (
            <Link key={item.name} to={`${CATEGORY_URL}/${item.id}`} css={sidebarCategoryListItemStyle}>
              {item.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

const sidebarCategoryListStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 2rem;
`;

const sidebarCategoryListTitleStyle = css`
  padding: 0.5rem 0;
  margin-bottom: 0.5rem;
  border-bottom: 2px solid ${theme.textWhite};

  color: ${theme.textWhite};
  font-size: 2rem;
  font-weight: 800;
`;

const sidebarCategoryListItemsStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 1rem 0;

  color: ${theme.textWhite};
  font-size: 1.2rem;
  font-weight: 600;
`;

const sidebarCategoryListItemStyle = css`
  margin-bottom: 1rem;
  color: ${theme.textWhite};
  font-size: 1.2rem;
  font-weight: 600;
`;

export default SidebarCategoryList;
