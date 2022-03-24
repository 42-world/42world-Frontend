import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { LeftBar, Board, Advertisement } from "../organisms/community";
const Community = () => {
  return (
    <CommunityBlock>
      <div className="body">
        <LeftBar />
        <Board />
        <Advertisement />
      </div>
      <div className="page">밑에 페이지네이션</div>
    </CommunityBlock>
  );
};

const CommunityBlock = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100%;
  .body {
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-grow: 4;
  }
  .page {
    flex-grow: 1;
  }
`;

export default Community;
