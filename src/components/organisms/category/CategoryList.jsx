import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import styled from 'styled-components';
import { getCategory } from '@common/hooks/api/category';
import { userCurrentPosState } from '../../../store/userCurrentPos';
import { rem } from '../../../styles/rem';

const CategoryList = ({ sendedId }) => {
  const { categories } = getCategory();
  const location = useLocation();
  const categoryPos = location.pathname.split('/')[1];
  const categoryId = parseInt(location.pathname.split('/')[2]);
  const [userCurrentPos, setUserCurrentPos] = useRecoilState(userCurrentPosState);

  useEffect(() => {
    if (categoryPos === 'category') {
      setUserCurrentPos(categoryId);
    }
  }, [categoryId, categoryPos, setUserCurrentPos]);

  return (
    <CategoryListBlock>
      <h2 className="category-title">커뮤니티</h2>
      <section className="category">
        {categories.map(category => (
          <Link
            className={`nav-links ${categoryId === category.id ? 'curCategory' : ''}`}
            key={category.id}
            to={`/category/${category.id}`}
          >
            <div>{category.name}</div>
          </Link>
        ))}
      </section>
    </CategoryListBlock>
  );
};

const CategoryListBlock = styled.div`
  @media screen and (min-width: 768px) {
    width: 100%;
    background-color: #fff;
    padding: 1rem;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 0.4rem;

    h2 {
      font-size: 1.2rem;
      border-bottom: 1px solid #ddd;
      padding: 0.3rem 0;
      margin-bottom: 0.5rem;
    }
    .nav-links {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.black};
      font-size: 0.8rem;
      list-style: none;
      margin: 0.3rem 0;
      font-weight: 600;
      &.curCategory {
        color: #53b7ba;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: ${rem(5)} 0;
    width: 100vw;
    margin: auto;
    h2 {
      display: none;
    }
    .category {
      font-size: 0.9rem;
      width: 100%;
      font-weight: 600;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      .nav-links {
        margin: 0.3rem 0.5rem;
        color: ${props => props.theme.black};
        text-decoration: none;
        &.curCategory {
          color: #53b7ba;
          border-bottom: 2px solid #53b7ba;
        }
      }
    }
  }
`;

export default CategoryList;
