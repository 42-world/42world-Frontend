import { useState } from 'react';

import { ReactionService } from '@root/network';
import { ArticleProps } from '@components/pages/articles/common/types';

const ArticleLike = ({ article }: ArticleProps) => {
  const [isLike, setIsLike] = useState(article.isLike);
  const [likeCount, setLikeCount] = useState(article.likeCount);

  const handleClick = async () => {
    const res = await ReactionService.articleReaction(article.id);
    setIsLike(res.isLike);
    setLikeCount(res.likeCount);

    // TODO: debouncing 적용
  };
  return (
    <button onClick={handleClick}>
      {isLike ? '좋아요 취소' : '좋아요'} {likeCount}
    </button>
  );
};

export default ArticleLike;