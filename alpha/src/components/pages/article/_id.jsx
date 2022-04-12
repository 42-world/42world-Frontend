import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../atoms/global";
import { CategoryList, Advertisement } from "../../organisms/category";
import { ArticleContent, Comment } from "../../organisms/article";
import { useLocation } from "react-router-dom";
import { ArticleService, CommentService } from "../../../network";

const _id = ({ id }) => {
  const loca = useLocation();
  const categoryId = parseInt(loca.pathname.split("/")[2]);
  const [article, setArticle] = useState();
  const [comment, setComment] = useState();
  useEffect(() => {
    let param = id;
    if (!param) {
      param = categoryId;
    }
    (async () => {
      let data = await ArticleService.getArticleByAritlceId(param);
      console.log(data);
      setArticle(data);
      data = await ArticleService.getArticlesCommentsById(param);
      setComment(data);
      console.log(data);
    })();
  }, [categoryId]);

  if (!article || !comment) return <></>;
  return (
    <ArticleBlock>
      <div className="block category_block">
        <CategoryList sendedId={article.category.id} />
      </div>
      <div className="block article_block">
        <ArticleContent article={article} />
        <Comment comment={comment} />
      </div>
      <Advertisement />
    </ArticleBlock>
  );
};

const ArticleBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  & > .block {
    margin: 0 0.8rem;
    width: 100%;
  }
  .category_block {
    width: 12rem;
    min-width: 12rem;
  }
  .article_block {
    & > div {
      margin-bottom: 1.5rem;
    }
  }
  ${(props) => props.theme.mobileSize} {
    margin-top: 0;
    .category_block {
      display: none;
    }
    .article_block {
      margin: 0;
      & > div {
        margin-bottom: 0;
      }
    }
  }
`;

export { _id as Article };
