import { Comment } from '@root/network/types/Comment';
import { getCreatedAt } from '@components/pages/articles/common/utils';
import { useState } from 'react';
import { ReactionService } from '@root/network';

interface CommentItemProps {
  comment: Comment;
  articleId: number;
  handleDelete: (commendId: number) => void;
}

const CommentItem = ({ comment, articleId, handleDelete }: CommentItemProps) => {
  const [likeCount, setLikeCount] = useState(comment.likeCount);
  const [isLike, setIsLike] = useState(comment.isLike);

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
    <div key={comment.id}>
      <div>{comment.writer.nickname}</div>
      <div>{getCreatedAt(comment.createdAt)}</div>
      <div>{comment.content}</div>
      {comment.isSelf ? <button onClick={() => handleDelete(comment.id)}>삭제</button> : <></>}
      <div>
        <button onClick={handleClickLikeComment}>{isLike ? '좋아요 취소' : '좋아요'}</button>
        {likeCount}
      </div>
    </div>
  );
};

export default CommentItem;
