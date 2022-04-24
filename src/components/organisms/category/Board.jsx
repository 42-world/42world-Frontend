import { useEffect, useState } from "react";
import PreviewArticle from "./PreviewArticle";
import BoardHeader from "./BoardHeader";
import { ArticleList, Body, Wrapper } from "../../atoms/Board";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { ArticleService } from "../../../network";

const Board = () => {
  const [Articles, setArticles] = useState(null);
  const loca = useLocation();
  const categoryId = loca.pathname.split("/")[2];
  let page = 1;
  let articleCount = 10;

  useEffect(() => {
    (async () => {
      const { data } = await ArticleService.getArticlesByCategoryId(
        categoryId,
        page,
        articleCount
      );
      // const data = await ArticleService.getArticles(categoryId, page);
      setArticles(data);
    })();
    // eslint-disable-next-line
  }, [categoryId]);
  return (
    <>
      <CategoryBlock>
        <Wrapper>
          <div className="BoardHeaderWrapper">
            <BoardHeader />
          </div>
          <Body>
            <ArticleList>
              {Articles &&
                Articles.map((article, id) => (
                  <Link
                    to={`/article/${article.id}`}
                    className="articleList_content"
                    key={id}
                  >
                    <PreviewArticle article={article} />
                  </Link>
                ))}
            </ArticleList>
          </Body>
        </Wrapper>
      </CategoryBlock>
    </>
  );
};

const CategoryBlock = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: #fff;

  .BoardHeaderWrapper {
    border-bottom: 0.1rem solid #d8d8d8;
  }
  .articleList_content {
    text-decoration: none;
    color: ${(props) => props.theme.black};
    &:last-child {
      div {
        border: none;
      }
    }
  }
`;

export default Board;
