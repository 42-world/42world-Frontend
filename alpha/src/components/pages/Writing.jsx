import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CommunityList } from "../organisms/community";
import { WritingContent } from "../organisms/writing";

const Writing = () => {
  return (
    <WritingBlock>
      <div className="community_block">
        <CommunityList />
      </div>
      <div className="writing_block">
        <WritingContent />
      </div>
    </WritingBlock>
  );
};

const WritingBlock = styled(Container)`
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
  .writing_block {
    & > div {
      margin-bottom: 1.5rem;
    }
  }
`;

export default Writing;
