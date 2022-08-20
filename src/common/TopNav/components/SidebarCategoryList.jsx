/** @jsxImportSource @emotion/react */

import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';

import { Link } from 'react-router-dom';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';

import { theme } from '@styles/theme';

const SidebarCategoryList = ({ setIsToggled }) => {
  const { isError, categories } = useGetCategory();
  return (
    <div css={sidebarCategoryListStyle}>
      <div css={sidebarCategoryListTitleStyle}>커뮤니티</div>
      <div css={sidebarCategoryListItemsStyle}>
        {categories &&
          categories.map(item => (
            <Link
              key={item.name}
              to={`${CATEGORY_URL}/${item.id}`}
              css={sidebarCategoryListItemStyle}
              onClick={() => {
                setIsToggled(false);
              }}
            >
              {item.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

const sidebarCategoryListStyle = css`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
  padding: 0 2rem;
`;

const sidebarCategoryListTitleStyle = css`
  padding: 0.5rem 0;
  margin-bottom: 1rem;
  border-bottom: 2px solid ${theme.textWhite};

  color: ${theme.textWhite};
  font-size: 1.7rem;
  font-weight: 800;
`;

const sidebarCategoryListItemsStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;

const sidebarCategoryListItemStyle = css`
  width: 100%;
  padding: 0.7rem;
  border-radius: 0.5rem;

  color: ${theme.textWhite};
  font-size: 1.1rem;
  font-weight: 700;
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    background: ${theme.backgroundBlue2};
  }
`;

export default SidebarCategoryList;
