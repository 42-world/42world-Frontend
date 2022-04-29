import styled from "styled-components";

import PreviewArticle from "../category";

const MyArticleBoard = ({ isComment }) => {
  return (
    <MyArticleWrapper>
      <div className="board-header">
        <h1>{isComment ? "내 댓글" : "내 게시글"}</h1>
      </div>
    </MyArticleWrapper>
  );
};

const MyArticleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  background-color: #fff;
  .articleList_content {
    text-decoration: none;
    color: ${(props) => props.theme.black};
  }
`;

export default MyArticleBoard;
