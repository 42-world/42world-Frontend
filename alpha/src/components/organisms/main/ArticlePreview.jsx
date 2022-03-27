import styled from "styled-components";

import { AiOutlineHeart } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";

const ArticlePreview = ({ title, likeCount, commentCount }) => {
  return (
    <ArticlePreviewWrapper>
      <h3>{title}</h3>
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
  padding: 0.5rem 1rem;
  border-top: 0.1rem solid ${(props) => props.theme.lineGray1};

  h3 {
    font-weight: normal;
  }
`;

const ReactionWrapper = styled.div`
  display: flex;

  & > span {
    display: flex;
    align-items: center;
    padding: 0.4rem;
  }

  .like {
    color: ${(props) => props.theme.buttonRed1};
  }

  .comment {
    color: ${(props) => props.theme.buttonBlue2};
  }
`;

export default ArticlePreview;
