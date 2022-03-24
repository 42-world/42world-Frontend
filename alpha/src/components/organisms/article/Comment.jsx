import React, { useCallback } from "react";
import styled from "styled-components";

const Comment = () => {
  const commentCount = 10;
  const viewCount = 100;
  return (
    <CommentBlock>
      <div className="comment_info">
        <h3>댓글 {commentCount}개</h3>
        <h3>조회 {viewCount}회</h3>
      </div>
      <CreateComment />
      <CommentList />
    </CommentBlock>
  );
};

const CreateComment = () => {
  const textAreaRef = React.useRef(null);
  const handleTextAreaResizeHeight = useCallback(() => {
    textAreaRef.current.style.height = "auto";
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + "px";
  }, []);
  return (
    <CreateCommentBlock>
      <textarea
        ref={textAreaRef}
        placeholder={"댓글을 입력하세요"}
        onInput={handleTextAreaResizeHeight}
      ></textarea>
      <button>입력</button>
    </CreateCommentBlock>
  );
};

const CommentList = () => {
  return (
    <CommentListBlock>
      <h1>comment List</h1>
    </CommentListBlock>
  );
};

const CommentBlock = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.3rem;
`;

const CreateCommentBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  textarea {
    outline: none;
    border: 1px solid #ddd;
    min-height: 4rem;
    padding: 0.5rem;
    resize: none;
    font-size: 1rem;
    flex-grow: 1;
    border-radius: 0.3rem;
    margin-right: 0.7rem;
    &::-webkit-scrollbar {
      display: none;
    }
  }

  button {
    border: none;
    background-color: #53b7ba;
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    padding: 1.4rem 2.5rem;
    border-radius: 0.3rem;
  }
`;

const CommentListBlock = styled.div``;

export default Comment;
