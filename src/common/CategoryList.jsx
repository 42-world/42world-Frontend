import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { rem } from '@root/styles/rem';
import { useGetCategory } from '@common/hooks/api/category';

const CategoryList = ({ categoryId }) => {
  const { categories } = useGetCategory();

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
  overflow: hidden;
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    background-color: #fff;
    padding: 1rem;
    box-shadow: ${props => props.theme.boxShadow};
    border-radius: 0.4rem;

    h2 {
      width: 100%;
      font-size: 1.3rem;
      font-weight: 700;
      border-bottom: 1px solid #ddd;
      padding: 0.5rem 0;
      margin-bottom: 0.9rem;
    }
    .category {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      a {
        margin: 0 0 0.5rem 0;
      }
    }
    .nav-links {
      display: block;
      text-decoration: none;
      color: ${props => props.theme.black};
      font-size: 0.9rem;
      font-weight: 600;
      list-style: none;
      margin: 0.5rem 0;
      font-weight: 600;
      &.curCategory {
        color: #53b7ba;
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 0.7rem 0.5rem 0.5rem 0.5rem;
    margin: auto;
    border-bottom: 1px solid ${props => props.theme.lineGray2};
    &::-webkit-scrollbar {
    }
    h2 {
      display: none;
    }
    .category {
      overflow-x: scroll;
      font-size: 0.9rem;
      /*width: 100%;*/
      font-weight: 600;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      white-space: nowrap;
      .nav-links {
        transition: all 0.3s ease-in-out;
        margin: 0.3rem 0.5rem;
        color: ${props => props.theme.black};
        border-bottom: 2px solid ${props => props.theme.backgroundWhite};
        text-decoration: none;
        &.curCategory {
          color: #53b7ba;
          border-bottom: 2px solid #53b7ba;
        }
      }
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
`;

export default CategoryList;
