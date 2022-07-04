import dayjs from 'dayjs';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { ArticleService, CommentService } from '../../../network';

const Comment = ({ articleId, writer }) => {
  const [comment, setComment] = useState(null);

  useEffect(() => {
    (async () => {
      const res = await ArticleService.getArticlesCommentsById(articleId);
      setComment(res);
    })();
  }, [articleId]);

  const handleCreateComment = async () => {
    const res = await ArticleService.getArticlesCommentsById(articleId);
    setComment(res);
  };

  if (!comment) return <></>;
  return (
    <CommentBlock>
      <div className="comment_info">
        <h3>댓글 {comment.meta.totalCount}개</h3>
      </div>
      <CreateComment articleId={articleId} onCreateComment={handleCreateComment} />
      <CommentList commentDataList={comment.data} writer={writer} />
    </CommentBlock>
  );
};

const CreateComment = ({ articleId, onCreateComment }) => {
  const [commentInput, setCommentInput] = useState('');
  const textAreaRef = useRef(null);
  const handleTextAreaResizeHeight = useCallback(() => {
    textAreaRef.current.style.height = 'auto';
    textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 'px';
  }, []);
  const handleChangeComment = e => {
    setCommentInput(e.target.value);
  };

  const handleSubmitComment = async () => {
    //e.preventDefault();
    if (commentInput === '') {
      alert('입력된 댓글이 없습니다.');
      return;
    }
    await CommentService.createComment({
      content: commentInput,
      articleId: +articleId,
    });
    setCommentInput('');
    textAreaRef.current.style.height = 'auto';
    onCreateComment();
  };

  const onKeyDown = e => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      handleSubmitComment();
    }
  };

  return (
    <CreateCommentBlock>
      <textarea
        ref={textAreaRef}
        value={commentInput}
        placeholder="댓글을 입력하세요."
        onInput={handleTextAreaResizeHeight}
        onChange={handleChangeComment}
        onKeyDown={onKeyDown}
      ></textarea>
      <button type="button" onClick={handleSubmitComment}>
        입력
      </button>
    </CreateCommentBlock>
  );
};

const CommentList = ({ commentDataList, writer }) => {
  // TODO : Comment 삭제 함수 추가
  return (
    <CommentListBlock>
      {commentDataList.map(commentData => (
        <CommentItem key={commentData.id} commentData={commentData} writer={writer} />
      ))}
    </CommentListBlock>
  );
};

const CommentItem = ({ commentData, writer }) => {
  // TODO : 현재 유저의 ID를 확인할 수 있는 전역 값 추가
  const getArticleTime = time =>
    dayjs(time).isSame(dayjs(), 'day') ? dayjs(time).format('HH:mm') : dayjs(time).format('MM/DD');

  const deleteCommentById = async () => {
    if (window.confirm('댓글을 삭제하시겠습니까?')) {
      try {
        await CommentService.deleteComments(commentData.id);
        window.location.reload();
        alert('삭제되었습니다');
      } catch (e) {
        console.log('삭제를 실패했습니다.');
      }
    } else {
      alert('취소합니다');
    }
  };
  return (
    <CommentItemBlock>
      <div className="header">
        {commentData.writer.id === writer.id ? ( // 글작성자의 댓글일 경우 닉네임 색상 변경
          <h3 className="writer">{commentData.writer.nickname}</h3>
        ) : (
          <h3>{commentData.writer.nickname}</h3>
        )}
        <h4 className="created_at">{getArticleTime(commentData.createdAt)}</h4>
        {commentData.writer.id === writer.id && ( // 자신의 댓글일 경우 삭제 버튼 추가, 추후 articleInfo.writer 말고 댓글 작성자와 비교
          <button onClick={deleteCommentById}>삭제</button>
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
  box-shadow: ${props => props.theme.boxShadow};
  border-radius: 0.3rem;
  .comment_info {
    display: flex;
    flex-direction: row;
    h3 {
      font-size: 0.9rem;
      font-weight: bold;
      margin: 0.2rem 0.5rem 1rem 0;
      // &:first-child {
      //   padding-right: 0.5rem;
      //   border-right: 2px solid black;
      // }
    }
  }
  ${props => props.theme.mobileSize} {
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
