import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserService } from "../../../network";
import PreviewArticle from "../category/PreviewArticle";
import MyArticlePageSelector from "./MyArticlePageSelector";

const MyArticleBoard = ({ articleType }) => {
  const [articles, setArticles] = useState(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const navi = useNavigate();
  const ARTICLE = 1,
    COMMENT = 2;
  //LIKED = 3;

  const handleClickGoBack = () => {
    navi("/mypage");
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response =
        articleType === ARTICLE
          ? await UserService.getMyArticles(page)
          : articleType === COMMENT
          ? await UserService.getMyComments(page)
          : await UserService.getLikeArticles(page);
      setArticles(response.data);
      setPageCount(response.meta.pageCount);
    };

    fetchMyArticles();
  }, [articleType, page]);

  return (
    <MyArticleWrapper>
      <div className="title">
        <h1>
          {articleType === ARTICLE
            ? "내 게시글"
            : articleType === COMMENT
            ? "내 댓글"
            : "좋아요한 글"}
        </h1>
        <button className="go-back" onClick={handleClickGoBack}>
          {"< 돌아가기"}
        </button>
      </div>
      <div className="article-list">
        {articles &&
          articles.map((article, id) => (
            <Link
              to={`/article/${article.id}`}
              className="article-content"
              key={id}
            >
              <PreviewArticle article={article} />
            </Link>
          ))}
      </div>
      <MyArticlePageSelector
        curPage={page}
        setCurPage={setPage}
        pageCount={pageCount}
      />
    </MyArticleWrapper>
  );
};

const MyArticleWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    h1 {
      margin: 1rem 0.8rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
    .go-back {
      margin: 0.5rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  .article-content {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default MyArticleBoard;
