/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';

import { Comment } from '@root/network/types/Comment';
import { ReactionService } from '@root/network';
import { useGetArticleById } from '@root/common/hooks/api/article';
import { getCreatedAt } from '@components/pages/articles/common/utils';

interface CommentItemProps {
  comment: Comment;
  articleId: number;
  handleDelete: (commendId: number) => void;
}

const CommentItem = ({ comment, articleId, handleDelete }: CommentItemProps) => {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLike, setIsLike] = useState(comment.isLike);

  const { article } = useGetArticleById(articleId);

  const handleClickLikeComment = async () => {
    try {
      const { isLike, likeCount } = await ReactionService.commentReaction({ articleId, commentId: comment.id });
      setIsLike(isLike);
      setLikeCount(likeCount);
    } catch (e) {
      window.alert('좋아요 실패');
    }
  };

  return (
    <div key={comment.id} css={commentItemStyle}>
      <div css={commentWriterStyle}>
        <h3 className={comment.writer.id === article.writer.id ? 'writer' : ''}>{comment.writer.nickname}</h3>
        <h4 css={commentCreatedAtStyle}>{getCreatedAt(comment.createdAt)}</h4>
        {comment.isSelf ? (
          <button css={commentDeleteButtonStyle} onClick={() => handleDelete(comment.id)}>
            삭제
          </button>
        ) : (
          <></>
        )}
      </div>
      <div css={commentContentStyle}>{comment.content}</div>
      <div>
        <button onClick={handleClickLikeComment}>{isLike ? '좋아요 취소' : '좋아요'}</button>
        {likeCount}
      </div>
    </div>
  );
};

const commentItemStyle = css`
  padding: 1rem 1rem 1rem 0.3rem;
  max-width: 100%;
`;

const commentWriterStyle = css`
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
`;

const commentCreatedAtStyle = css`
  font-size: 0.7rem;
  font-weight: bold;
  color: #999;
  margin-right: 0.5rem;
`;

const commentContentStyle = css`
  display: flex;
  max-width: 100%;
  font-size: 0.9rem;
  font-weight: normal;
`;

const commentDeleteButtonStyle = css`
  border: none;
  background-color: transparent;
  font-size: 0.6rem;
  font-weight: bold;
  color: #999;
  cursor: pointer;
`;

export default CommentItem;
