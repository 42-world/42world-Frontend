import styled from "styled-components";

import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";

const ArticlePreview = ({ title, likeCount, commentCount }) => {
  return (
    <ArticlePreviewWrapper>
      <div>{title}</div>
      <ReactionWrapper>
        <span className="like">
          <AiOutlineHeart />
          <span>{likeCount}</span>
        </span>
        <span className="comment">
          <BiCommentDots />
          <span>{commentCount}</span>
        </span>
      </ReactionWrapper>
    </ArticlePreviewWrapper>
  );
};

const ArticlePreviewWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  font-size: 1.2rem;
  padding: 0.5rem;
  border-bottom: 0.1rem solid #ddd;
`;

const ReactionWrapper = styled.div`
  display: flex;

  & > span {
    display: flex;
    align-items: center;
  }

  .like {
    color: red;
  }

  .comment {
    color: blue;
  }
`;

export default ArticlePreview;
