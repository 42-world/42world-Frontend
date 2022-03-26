import React from "react";
import styled from "styled-components";

const LeftBar = () => {
  const categoryList = [
    "자유게시판",
    "익명1",
    "익명2",
    "지듣노[지최가듣는노래]",
    "42Chelin",
    "고양이게시판",
    "강아지 게시판",
  ];
  return (
    <CommunityBlock>
      <text className="title">커뮤니티</text>
      {categoryList.map((cate) => (
        <text>{cate}</text>
      ))}
    </CommunityBlock>
  );
};

const CommunityBlock = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  margin: 2em;
  .title {
    border-bottom: 1px solid black;
  }
`;

export default LeftBar;
