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
    "강아지 게시판"
  ];
  return (
    <CommunityBlock>
      <h1>커뮤니티</h1>
      {categoryList.map(cate => (
        <h1>{cate}</h1>
      ))}
    </CommunityBlock>
  );
};

const CommunityBlock = styled.div``;

export default LeftBar;
