import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../atoms/global";
import { CategoryList, Advertisement } from "../../organisms/category";
import { ArticleContent, Comment } from "../../organisms/article";
import { useLocation, useParams } from "react-router-dom";
import { ArticleService } from "../../../network";

const _id = ({ id }) => {
  const params = useParams();

  const [article, setArticle] = useState();
  const [comment, setComment] = useState();

  useEffect(() => {
    const { id } = params;
    (async () => {
      let data = await ArticleService.getArticleByAritlceId(id);
      console.log(data);
      setArticle(data);
      data = await ArticleService.getArticlesCommentsById(id);
      setComment(data);
      console.log(data);
    })();
  }, [params]);

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
