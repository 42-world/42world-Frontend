import { React, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

import { ArticlePreview } from "../main";

import { UserService } from "../../../network";

const MyArticlePreview = ({ articleType }) => {
  const [articles, setArticles] = useState(null);
  const navi = useNavigate();
  const ARTICLE = 1,
    COMMENT = 2;
  //LIKED = 3;

  const handleClickMoreBtn = () => {
    navi(
      `./${
        articleType === ARTICLE
          ? "article"
          : articleType === COMMENT
          ? "comment"
          : "liked"
      }`
    );
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response =
        articleType === ARTICLE
          ? await UserService.getMyArticles(1)
          : articleType === COMMENT
          ? await UserService.getMyComments(1)
          : await UserService.getLikeArticles(1);
      console.log(response.data);
      setArticles(response.data && response.data.slice(0, 5));
    };

    fetchMyArticles();
  }, [articleType]);

  return (
    <MyArticleDiv articleType={articleType}>
      <div className="title">
        <h1>
          {articleType === ARTICLE
            ? "내 게시글"
            : articleType === COMMENT
            ? "내 댓글"
            : "좋아요한 글"}
        </h1>
        <button className="more" onClick={handleClickMoreBtn}>
          {"더 보기 >"}
        </button>
      </div>
      {articles &&
        articles.map((article) => (
          <ArticlePreview
            key={article.id}
            id={article.id}
            title={articleType === COMMENT ? article.content : article.title}
            likeCount={articleType ? "" : article.commentCount}
            commentCount={articleType ? "" : article.commentCount}
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

  width: ${(props) =>
      props.articleType === 3 ? "calc(100%);" : "calc(50% - 0.8rem);"}
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
    display: ${(props) => (props.articleType === 2 ? "none" : "block")};
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
