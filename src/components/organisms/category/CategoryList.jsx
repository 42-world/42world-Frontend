import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useRecoilState, useRecoilValue } from "recoil";
import styled from "styled-components";
import { categoryState } from "../../../store/category";
import { currentState } from "../../../store/current";

const CategoryList = ({ sendedId }) => {
  const category = useRecoilValue(categoryState);
  const loca = useLocation();
  const categoryPos = loca.pathname.split("/")[1];
  const categoryId = parseInt(loca.pathname.split("/")[2]);
  const [current, setCurrent] = useRecoilState(currentState);

  useEffect(() => {
    if (categoryPos === "category") {
      setCurrent(categoryId);
    }
  }, [categoryId, categoryPos, setCurrent]);

  return (
    <CategoryListBlock>
      <h2>커뮤니티</h2>
      {category.map(({ id, name }, idx) => {
        if (id === current || id === sendedId)
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
