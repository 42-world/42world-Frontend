import { React, useState, useEffect } from "react";
import styled from "styled-components";

import { ArticlePreview } from "../main";

import { UserService } from "../../../network";

const MyArticlePreview = ({ ifComment }) => {
  const [articles, setArticles] = useState(null);

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response = ifComment
        ? await UserService.getMyComments()
        : await UserService.getMyArticles();
      setArticles(response.data.slice(0, 5));
    };

    fetchMyArticles();
  }, [ifComment]);

  return (
    <MyArticleDiv ifComment={ifComment}>
      <div className="title">
        <h1>{ifComment ? "내 댓글" : "내 게시글"}</h1>
        <button className="more">{"더 보기 >"}</button>
      </div>
      {articles &&
        articles.map((article) => (
          <ArticlePreview
            key={article.id}
            title={ifComment ? article.content : article.title}
            likeCount={ifComment ? "" : article.commentCount}
            commentCount={ifComment ? "" : article.commentCount}
          />
        ))}
    </MyArticleDiv>
  );
};

const MyArticleDiv = styled.div`
  background: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: ${(props) => props.theme.borderRadius};

  margin: 0.5rem 0;

  width: calc(50% - 0.8rem);
  height: fit-content;
  .title {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    h1 {
      display: flex;
      align-items: center;
      font-weight: 700;
    }
    button {
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }
  h3 {
    height: 1.5rem;
    display: flex;
    align-items: center;
  }
  .like,
  .comment {
    display: ${(props) => (props.ifComment ? "none" : "block")};
  }
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    width: 100%;
    margin: 0;
  }
`;

export default MyArticlePreview;
