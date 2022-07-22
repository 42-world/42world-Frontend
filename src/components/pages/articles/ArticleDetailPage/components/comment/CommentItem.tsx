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
  isReactionable: boolean;
  comment: Comment;
  articleId: number;
  handleDelete: (commendId: number) => void;
}

const CommentItem = ({ isReactionable, comment, articleId, handleDelete }: CommentItemProps) => {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLike, setIsLike] = useState(comment.isLike);

  // TODO: props로 articleWriter을 받아오지않고
  // 댓글 하나하나 hook 으로 article을 가져와서 article.writer.id를 쓰는 이유는,
  // 어자피 실제 요청이 나가지 않으니까 매번 hook을 사용해도 상관없기 때문인가요?
  //
  // 또는 CommentItem 의 props인터페이스에서 외부에 들어나는 불필요한 의존성은 최대한 줄이고
  // articleWriter를 가져오는 책임을 내부로 전환하였다고 봐도 될까요?
  //
  // -> 그렇다면 내부에서 hook으로 처리가능하다고 판단되면, props로 받을 필요가 없는건가요?
  // 그렇다면 isReactionable 도 hook으로 처리가능할거같은데 어떻게 생각하시나요?
  const { article } = useGetArticleById(articleId);

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
        {comment.isSelf ? (
          <button css={commentDeleteButtonStyle} onClick={() => handleDelete(comment.id)}>
            삭제
          </button>
        ) : (
          <div css={[commentLikeButtonStyle, isReactionable && likeButtonCursorStyle]}>
            <button onClick={handleClickLikeComment}>{isLike ? <FaHeart /> : <FaRegHeart />}</button>
            <span>{likeCount}</span>
          </div>
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
  transform: translateY(-1.3px);
  cursor: pointer;
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
