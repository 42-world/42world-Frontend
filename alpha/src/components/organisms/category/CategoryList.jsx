import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../store/category";

const CategoryList = () => {
  const category = useRecoilValue(categoryState);
  const loca = useLocation();
  const categoryId = parseInt(loca.pathname.split("/")[2]);

  return (
    <CategoryListBlock>
      <h2>커뮤니티</h2>
      {category.map(({ id, name }, idx) => {
        if (id === categoryId)
          return (
            <Link to={`/category/${id}`} className="nav-links" key={idx}>
              <li className="curCategory">{name}</li>
            </Link>
          );
        else
          return (
            <Link to={`/category/${id}`} className="nav-links" key={idx}>
              <li>{name}</li>
            </Link>
          );
      })}
    </CategoryListBlock>
  );
};

const CategoryListBlock = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 0.4rem;

  h2 {
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
    padding: 0.3rem 0;
    margin-bottom: 0.5rem;
  }
  .nav-links {
    text-decoration: none;
    li {
      color: ${(props) => props.theme.black};
      font-size: 0.9rem;
      list-style: none;
      margin: 0.3rem 0;
      font-weight: 600;
    }
    .curCategory {
      color: #53b7ba;
    }
  }
`;

export default CategoryList;
