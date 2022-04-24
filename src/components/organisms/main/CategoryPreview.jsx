import { useState, useEffect } from "react";
import styled from "styled-components";

import ArticlePreview from "./ArticlePreview";
import { HiThumbUp } from "react-icons/hi";

import { rem } from "../../../styles/rem";
import { ArticleService } from "../../../network";
import { useNavigate } from "react-router-dom";

const CategoryPreview = ({ category }) => {
  const [articles, setArticles] = useState(null);
  const navigate = useNavigate();
  const fetch = async () => {
    const response = await ArticleService.getArticlesByCategoryId(category.id);
    setArticles(response.data);
  };

  const handleClickCategory = () => {
    navigate(`/category/${category.id}`);
  };

  useEffect(() => {
    fetch();
    // eslint-disable-next-line
  }, []);

  if (!articles) return <></>;
  return (
    <CategoryPreviewWrapper>
      <div className="title">
        <div className="title-left">
          <HiThumbUp />
          <h2>{category.name}</h2>
        </div>
        <button className="more" onClick={handleClickCategory}>
          {"더 보기 >"}
        </button>
      </div>
      {articles.map((article) => (
        <ArticlePreview
          key={article.id}
          id={article.id}
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

  width: ${rem(362)};
  margin: 0 ${rem(10)} ${rem(20)} ${rem(10)};
  height: ${rem(126)};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${rem(10)};

  .title {
    padding: ${rem(8)} ${rem(8)};
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
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

    .more {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
  }
`;

export default CategoryPreview;
