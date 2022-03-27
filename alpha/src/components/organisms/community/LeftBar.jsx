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
      <div className="title">커뮤니티</div>
      <div className="category">
        {categoryList.map((cate) => (
          <div className="category-list">{cate}</div>
        ))}
      </div>
    </CommunityBlock>
  );
};

const CommunityBlock = styled.div`
  @media screen and (min-width: 960px) {
    width: 254px;
    height: 100%;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-top: 24px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    .title {
      padding: 5px 5px;
      border-bottom: 1px solid #d8d8d8;
      font-size: 18px;
    }
    .category {
      margin: 5px 0;
      .category-list {
        padding: 5px 0px;
        padding-left: 15px;
        font-size: 12px;
        line-height: 10px;
        cursor: pointer;
      }
    }
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default LeftBar;
