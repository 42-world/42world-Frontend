import { useState } from "react";
import styled from "styled-components";

import ArticlePreview from "./ArticlePreview";
import { HiThumbUp } from "react-icons/hi";

import data from "../../../datas";
import { rem } from "../../../styles/rem";

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

  width: ${rem(360)};
  margin: ${rem(10)};
  // box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${rem(10)};

  .title {
    padding: ${rem(8)} ${rem(8)};
    display: flex;
    justify-content: space-between;

    .title-left {
      display: flex;
      align-items: center;

      svg {
        font-size: ${rem(16)};
        margin-right: ${rem(6)};
      }

      h2 {
        font-size: ${rem(16)};
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
