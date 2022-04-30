import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ArticlePreview } from "../main";

import { UserService } from "../../../network";

const MyArticlePreview = ({ isComment }) => {
  const [articles, setArticles] = useState(null);
  const navi = useNavigate();

  const handleClickMoreBtn = () => {
    navi(`./${isComment ? "comment" : "article"}`);
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response = isComment
        ? await UserService.getMyComments()
        : await UserService.getMyArticles();
      setArticles(response.data.slice(0, 5));
    };

    fetchMyArticles();
  }, [isComment]);

  return (
    <MyArticleDiv isComment={isComment}>
      <div className="title">
        <h1>{isComment ? "내 댓글" : "내 게시글"}</h1>
        <button className="more" onClick={handleClickMoreBtn}>
          {"더 보기 >"}
        </button>
      </div>
      {articles &&
        articles.map((article) => (
          <ArticlePreview
            key={article.id}
            id={article.id}
            title={isComment ? article.content : article.title}
            likeCount={isComment ? "" : article.commentCount}
            commentCount={isComment ? "" : article.commentCount}
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
  height: 13rem;
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
    display: ${(props) => (props.isComment ? "none" : "block")};
  }
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    width: 100%;
    height: fit-content;
    margin: 0;
  }
`;

export default MyArticlePreview;
