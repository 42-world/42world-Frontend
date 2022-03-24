import { useState } from "react";
import styled from "styled-components";

import ArticlePreview from "./ArticlePreview";

import data from "../../datas";

const CategoryPreview = ({ title }) => {
  const [articles] = useState(data.articles.data);

  return (
    <CategoryPreviewWrapper>
      <div className="title">
        <div className="title-left">
          <div>아이콘</div>
          <h2>{title}</h2>
        </div>
        <button>더 보기</button>
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

  width: 38rem;
  margin: 0.2rem;
  box-shadow: 1px 2px 6px 0px rgba(0, 0, 0, 0.3);

  .title {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid red;
  }

  .title-left {
    display: flex;
    align-items: center;

    & > * {
      margin: 0 0.2rem;
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
  }
`;

export default CategoryPreview;
