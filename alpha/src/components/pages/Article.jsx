import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CategoryList, Advertisement } from "../organisms/category";
import { ArticleContent, Comment } from "../organisms/article";

const Article = () => {
  return (
    <ArticleBlock>
      <div className="block community_block">
        <CategoryList />
      </div>
      <div className="block article_block">
        <ArticleContent />
        <Comment />
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
  .community_block {
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
    .community_block {
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

export default Article;
