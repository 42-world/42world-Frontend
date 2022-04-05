import React, { useCallback } from "react";
import styled from "styled-components";

const Comment = () => {
  const articleInfo = {
    title: "제목",
    viewCount: 100,
    commentCount: 10,
    writer: "글쓴이",
  };

  return (
    <CommentBlock>
      <div className="comment_info">
        <h3>댓글 {articleInfo.commentCount}개</h3>
        <h3>조회 {articleInfo.viewCount}회</h3>
      </div>
      <CreateComment />
      <CommentList articleInfo={articleInfo} />
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

const CommentList = ({ articleInfo }) => {
  const commentList = [
    {
      nickname: "글쓴이",
      content: "봉순이 이겨라",
      createdAt: "02/15 10:01",
    },
    {
      nickname: "익명",
      content:
        "봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라봉순이 이겨라",
      createdAt: "02/14 03:01",
    },
  ];

  return (
    <CommentListBlock>
      {commentList.map((comment) => (
        <CommentItem commentData={comment} articleInfo={articleInfo} />
      ))}
    </CommentListBlock>
  );
};

const CommentItem = ({ commentData, articleInfo }) => {
  return (
    <CommentItemBlock>
      <div className="header">
        {commentData.nickname === articleInfo.writer ? ( // 글작성자의 댓글일 경우 닉네임 색상 변경
          <h3 className="writer">{commentData.nickname}</h3>
        ) : (
          <h3>{commentData.nickname}</h3>
        )}
        <h4 className="created_at">{commentData.createdAt}</h4>

        {commentData.nickname === articleInfo.writer && ( // 자신의 댓글일 경우 삭제 버튼 추가, 추후 articleInfo.writer 말고 댓글 작성자와 비교
          <button
            onClick={() => {
              console.log("댓글 삭제");
            }}
          >
            삭제
          </button>
        )}
      </div>
      <div className="content">{commentData.content}</div>
    </CommentItemBlock>
  );
};

const CommentBlock = styled.div`
  width: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  border-radius: 0.3rem;
  .comment_info {
    display: flex;
    flex-direction: row;
    h3 {
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0.2rem 0.5rem 1rem 0;
      &:first-child {
        padding-right: 0.5rem;
        border-right: 2px solid black;
      }
    }
  }
  ${(props) => props.theme.mobileSize} {
    width: 100%;
    box-shadow: none;
    border-radius: 0;
  }
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

const CommentItemBlock = styled.div`
  padding: 1rem 1rem 1rem 0.3rem;
  max-width: 100%;
  .header {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 0.3rem;

    h3 {
      font-size: 0.9rem;
      font-weight: bold;
      margin-right: 0.5rem;
    }
    .writer {
      color: #53b7ba;
    }
    h4 {
      font-size: 0.7rem;
      font-weight: bold;
      color: #999;
      margin-right: 0.5rem;
    }
    button {
      border: none;
      background-color: transparent;
      font-size: 0.6rem;
      font-weight: bold;
      color: #999;
      cursor: pointer;
    }
  }
  .content {
    display: flex;
    max-width: 100%;
    font-size: 0.9rem;
    font-weight: normal;
  }
`;

export default Comment;
