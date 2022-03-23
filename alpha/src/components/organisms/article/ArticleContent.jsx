import React from "react";
import styled from "styled-components";

const ArticleContent = () => {
  return (
    <ArticleContentBlock>
      <div className="header">
        <h2>자유게시판</h2>
        <h1>봉순이에게 결투를 신청한다</h1>
        <h3 className="nickName">ALUMNI · 익명</h3>
        <h3 className="articleInfo">⏱ 01:05 &nbsp; 👁‍ 100 &nbsp; 💬 10</h3>
      </div>
      <div className="content">게시글</div>
    </ArticleContentBlock>
  );
};

const ArticleContentBlock = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);

  .header {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
    }
    h2 {
      font-size: 1.1rem;
      margin: 0.3rem 0;
    }
    h3 {
      font-size: 0.9rem;
      margin: 0.3rem 0;
    }
    .nickName {
      color: #555;
    }
    .articleInfo {
      color: #888;
    }
  }

  .content {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
  }
  li {
    font-size: 0.9rem;
    list-style: none;
    margin: 0.3rem 0;
    font-weight: 600;
  }
  .curCommunity {
    color: #53b7ba;
  }
`;

export default ArticleContent;
