import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../../atoms/global";
import { CategoryList, Advertisement } from "../../organisms/category";
import { ArticleContent, Comment } from "../../organisms/article";
import { useParams } from "react-router-dom";
import { ArticleService } from "../../../network";

const _id = () => {
  const params = useParams();
  const { id } = params;

  const [article, setArticle] = useState();

  useEffect(() => {
    (async () => {
      let data = await ArticleService.getArticleByAritlceId(id);
      setArticle(data);
    })();
    // eslint-disable-next-line
  }, []);

  if (!article) return <></>;
  return (
    <ArticleBlock>
      <div className="block category_block">
        <CategoryList sendedId={article.category.id} />
      </div>
      <div className="block article_block">
        <ArticleContent article={article} />
        <Comment articleId={id} writer={article.writer} />
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

export default _id;
