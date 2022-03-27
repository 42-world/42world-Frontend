import { useState } from "react";
import styled from "styled-components";

import ArticlePreview from "./ArticlePreview";
import { HiThumbUp } from "react-icons/hi";

import data from "../../../datas";

const CategoryPreview = ({ title }) => {
  const [articles] = useState(data.articles.data);

  return (
    <CategoryPreviewWrapper>
      <div className="title">
        <div className="title-left">
          <HiThumbUp />
          <h2>{title}</h2>
        </div>
        <button className="more">{"더 보기 >"}</button>
      </div>
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          title={article.title}
          likeCount={article.likeCount}
          commentCount={article.commentCount}
        />
      ))}
    </CategoryPreviewWrapper>
  );
};

const CategoryPreviewWrapper = styled.div`
  background: white;

  width: 36rem;
  margin: 1rem;
  // box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 1rem;

  .title {
    padding: 0.8rem 1.6rem;
    display: flex;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;

      svg {
        font-size: 1.6rem;
        margin-right: 0.6rem;
      }
    }

    button.more {
      border: none;
      background: transparent;
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
  }
`;

export default CategoryPreview;
