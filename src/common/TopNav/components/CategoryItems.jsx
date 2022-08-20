/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { StyledMenuButton } from '../styled/MenuItems.styled';

import { theme } from '@styles/theme';

const CategoryItems = () => {
  const { isError, categories } = useGetCategory();

  return (
    <div className="category-div">
      <div css={[categoryTitleStyle]}>카테고리</div>
      <div css={categoryListStyle}>
        {categories &&
          categories.map(item => (
            <Link key={item.name} to={`${CATEGORY_URL}/${item.id}`} css={categoryItemStyle}>
              {item.name}
            </Link>
          ))}
      </div>
    </div>
  );
};

const categoryTitleStyle = css`
  background-color: ${theme.secondary};
  color: ${theme.textWhite};
  font-weight: bold;
  font-size: 1rem;
  margin: 0 10px;
  padding: 1rem 0;
  cursor: default;
  width: max-content;

  &:hover {
    & + div {
      transform: translateX(calc(-50% + 2.2rem)) scaleY(1);
    }
  }
`;

const categoryItemStyle = css`
  background-color: ${theme.secondary};
  color: ${theme.textWhite};
  font-weight: bold;
  font-size: 1rem;
  margin: 0.7rem 1.5rem;
`;

const categoryListStyle = css`
  box-sizing: border-box;
  position: absolute;
  top: calc(100%);
  transform: translateX(calc(-50% + 2.2rem)) scaleY(0);
  transform-origin: top;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${theme.secondary};

  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;

  height: max-content;
  overflow: hidden;

  transition: all 0.3s ease-in-out;

  &:hover {
    transform: translateX(calc(-50% + 2.2rem)) scaleY(1);
  }
`;

export default CategoryItems;
