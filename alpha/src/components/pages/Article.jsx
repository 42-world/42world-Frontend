import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CommunityList } from "../organisms/community";
import { ArticleContent } from "../organisms/article";

const Article = () => {
  return (
    <ArticleBlock>
      <div className="community_block">
        <CommunityList />
      </div>
      <div>
        <ArticleContent />
      </div>
    </ArticleBlock>
  );
};

const ArticleBlock = styled(Container)`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 0;

  & > div {
    margin: 0 0.8rem;
    width: 100%;
    min-width: max-content;
  }
  .community_block {
    width: 13rem;
  }
`;

export default Article;
