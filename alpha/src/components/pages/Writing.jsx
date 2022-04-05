import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CommunityList } from "../organisms/community";
import { WritingContent } from "../organisms/writing";

const Writing = () => {
  const articleInfo = {
    title: "",
    content: "",
  };
  return (
    <WritingBlock>
      <div className="community_block">
        <CommunityList />
      </div>
      <div className="writing_block">
        <WritingContent articleInfo={articleInfo} />
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
    width: 12rem;
    min-width: 12rem;
  }
  .writing_block {
    max-width: calc(100% - 15.2rem);
    & > div {
      margin-bottom: 1.5rem;
    }
  }

  ${(props) => props.theme.mobileSize} {
    margin-top: 0;
    .community_block {
      display: none;
    }
    .writing_block {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`;

export default Writing;
