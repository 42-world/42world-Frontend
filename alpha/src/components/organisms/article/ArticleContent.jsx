import React from "react";
import styled from "styled-components";

import { Viewer } from "@toast-ui/react-editor";
import { ReactionService } from "../../../network";

const ArticleContent = ({ article }) => {
  // TODO : 현재 카테고리를 전역 상태로 관리해서 reactionPossible 불러오기
  const isModifiable = true;
  const isReactionPossible = true;
  const [isLike, setIsLike] = React.useState(article.isLike);

  const handleClickLike = async () => {
    const res = await ReactionService.createArticleReactionHeart(article.id);
    setIsLike(res.isLike);
  };
  return (
    <ArticleContentBlock>
      <div className="header">
        <h2>{article.category.name}</h2>
        <h1>{article.title}</h1>
        <h3 className="nickname">
          {article.writer.role} · {article.writer.nickname}
        </h3>
        <h3 className="article_info">
          ⏱ 01:05 &nbsp; 👁‍ {article.viewCount} &nbsp; 💬 {article.commentCount}
        </h3>
        {isModifiable && (
          <div className="edit_article">
            {/* TODO : 현재 user의 id와 글 작성자의 id를 비교해서 조건부에 따라 수정,삭제를 렌더링하도록 수정 */}
            <button onClick={() => {}}>수정</button>
            <button onClick={() => {}}>삭제</button>
          </div>
        )}
      </div>
      <div className="content">
        <Viewer initialValue={article.content} />
        {isReactionPossible && (
          <span onClick={handleClickLike}>
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
