import React from "react";
import styled from "styled-components";

import { Viewer } from "@toast-ui/react-editor";

const ArticleContent = () => {
  const content =
    "***테스트 입니다***\n*이것도 테스트*\n~~너무 하기 힘들~~어요 ㅠㅠ\n***\n###\n# Head1\n> block quate\n\n![test](https://42doproject.s3.ap-northeast-2.amazonaws.com/origin/profile/96n99696abca7d1-4281-a6ed-7ea8540db210.jpg)\n";
  const isModifiable = true;
  const isReactionPossible = true;
  const [isLike, setIsLike] = React.useState(true);

  return (
    <ArticleContentBlock>
      <div className="header">
        <h2>자유게시판</h2>
        <h1>봉순이에게 결투를 신청한다</h1>
        <h3 className="nickname">ALUMNI · 익명</h3>
        <h3 className="article_info">⏱ 01:05 &nbsp; 👁‍ 100 &nbsp; 💬 10</h3>
        {isModifiable && (
          <div className="edit_article">
            <button onClick={() => {}}>수정</button>
            <button onClick={() => {}}>삭제</button>
          </div>
        )}
      </div>
      <div className="content">
        <Viewer initialValue={content} />
        {isReactionPossible && (
          <span
            onClick={() => {
              setIsLike(!isLike);
            }}
          >
            {isLike ? (
              <img src="/assets/images/Icon/Favorite.svg" alt="" />
            ) : (
              <img src="/assets/images/Icon/notFavorite.svg" alt="" />
            )}
          </span>
        )}
      </div>
    </ArticleContentBlock>
  );
};

const ArticleContentBlock = styled.div`
  width: 100%;
  background-color: #fff;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 0.3rem;

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
    .nickname {
      color: #555;
    }
    .article_info {
      color: #888;
    }
    .edit_article {
      button {
        border: none;
        background-color: transparent;
        color: #555;
        font-size: 0.8rem;
        margin-right: 0.4rem;
        font-weight: bold;
      }
    }
  }

  .content {
    padding: 1rem;
    border-bottom: 1px solid #ddd;
    display: flex;
    flex-direction: column;
    align-item: stretch;

    span {
      display: flex;
      width: 70px;
      margin: 2rem auto 1rem auto;
      cursor: pointer;
      img {
        width: 100%;
        margin-right: 1rem;
      }
    }
  }

  ${(props) => props.theme.mobileSize} {
    width: 100%;
    box-shadow: none;
  }
`;

export default ArticleContent;
