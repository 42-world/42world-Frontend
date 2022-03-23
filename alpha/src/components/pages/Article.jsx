import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CommunityList } from "../organisms/community";

const Article = () => {
  return (
    <ArticleBlock>
      <div className="community_block">
        <CommunityList />
      </div>
    </ArticleBlock>
  );
};

const ArticleBlock = styled(Container)`
  background-color: #f8f8f8;
  display: flex;
  flex-direction: row;
  padding: 1.5rem 0;
  .community_block {
    width: 13rem;
  }
`;

export default Article;
