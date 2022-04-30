import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

import { UserService } from "../../../network";
import PreviewArticle from "../../organisms/category/PreviewArticle";

const MyArticleBoard = ({ isComment }) => {
  const [articles, setArticles] = useState(null);
  const navi = useNavigate();

  const handleClickGoBack = () => {
    navi("/mypage");
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response = isComment
        ? await UserService.getMyComments()
        : await UserService.getMyArticles();
      setArticles(response.data);
    };

    fetchMyArticles();
  }, [isComment]);

  return (
    <MyArticleWrapper>
      <div>
        <h1>{isComment ? "내 댓글" : "내 게시글"}</h1>
      </div>
      <hr />
      <div className="go-back" onClick={handleClickGoBack}>
        {"< 돌아가기"}
      </div>
      <div className="article-list">
        {articles &&
          articles.map((article, id) => (
            <Link
              to={`/article/${article.id}`}
              className="article-content"
              key={id}>
              <PreviewArticle article={article} />
            </Link>
          ))}
      </div>
    </MyArticleWrapper>
  );
};

const MyArticleWrapper = styled.div`
  width: 100%;
  height: fit-content;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  box-shadow: ${(props) => props.theme.boxShadow};
  h1 {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${(props) => props.theme.lineGray1};
  }
  .go-back {
    margin: 0.3rem 0;
    padding: 0.3rem;
    line-height: 1.3rem;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    &:hover {
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
