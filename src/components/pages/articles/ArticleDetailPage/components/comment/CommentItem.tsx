/** @jsxImportSource @emotion/react */

import { useState } from 'react';
import { css } from '@emotion/react';

import { Comment } from '@root/network/types/Comment';
import { ReactionService } from '@root/network';
import { useGetArticleById } from '@root/common/hooks/api/article';
import { getCreatedAt } from '@components/pages/articles/common/utils';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { theme } from '@root/styles/theme';

interface CommentItemProps {
  comment: Comment;
  articleId: number;
  handleDelete: (commendId: number) => void;
}

const CommentItem = ({ comment, articleId, handleDelete }: CommentItemProps) => {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLike, setIsLike] = useState(comment.isLike);

  const { article } = useGetArticleById(articleId);
  const isReactionable = article.category.isReactionable;

  const handleClickLikeComment = async () => {
    if (isReactionable) {
      const { isLike, likeCount } = await ReactionService.commentReaction({ articleId, commentId: comment.id });
      setIsLike(isLike);
      setLikeCount(likeCount);
    }
  };

  return (
    <div key={comment.id} css={commentItemStyle}>
      <div css={commentWriterStyle}>
        <h3 className={comment.writer.id === article.writer.id ? 'writer' : ''}>{comment.writer.nickname}</h3>
        <h4 css={commentCreatedAtStyle}>{getCreatedAt(comment.createdAt)}</h4>
        <div css={commentLikeButtonStyle}>
          <button css={isReactionable && likeButtonCursorStyle} onClick={handleClickLikeComment}>
            {isLike ? <FaHeart /> : <FaRegHeart />}
          </button>
          <span>{likeCount}</span>
        </div>
        {comment.isSelf && (
          <button css={commentDeleteButtonStyle} onClick={() => handleDelete(comment.id)}>
            삭제
          </button>
        )}
      </div>
      <div css={commentContentStyle}>{comment.content}</div>
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
  margin-left: 0.5rem;
}
`;

const commentLikeButtonStyle = css`
  transform: translateY(-2px);

  & > button {
    border: none;
    background-color: transparent;
    font-size: 15px;
    transform: translateY(3px);
    font-weight: bold;
    color: ${theme.buttonRed1};
    margin-right: 5px;
  }

  & > span {
    font-size: 0.7rem;
    padding-bottom: 10px;
    color: ${theme.textGray4};
  }
`;

const likeButtonCursorStyle = css`
  cursor: pointer;
`;

export default CommentItem;
