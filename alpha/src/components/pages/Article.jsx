import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CommunityList } from "../organisms/community";
import { ArticleContent, Comment } from "../organisms/article";

const Article = () => {
  return (
    <ArticleBlock>
      <div className="community_block">
        <CommunityList />
      </div>
      <div className="article_block">
        <ArticleContent />
        <Comment />
      </div>
    </ArticleBlock>
  );
};

const ArticleBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  & > div {
    margin: 0 0.8rem;
    width: 100%;
  }
  .community_block {
    width: 13rem;
  }
  .article_block {
    & > div {
      margin-bottom: 1.5rem;
    }
  }
`;

export default Article;
