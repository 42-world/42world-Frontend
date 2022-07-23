/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
import { ReactionService } from '@root/network';
import { ArticleProps } from '@components/pages/articles/common/types';

const ArticleLike = ({ article }: ArticleProps) => {
  const [isLike, setIsLike] = useState(article.isLike);
  const [likeCount, setLikeCount] = useState(article.likeCount);
  const isReactionable = article.category.isReactionable;

  const handleClick = async () => {
    if (isReactionable) {
      const res = await ReactionService.articleReaction(article.id);
      setIsLike(res.isLike);
      setLikeCount(res.likeCount);
      // TODO: debouncing 적용
    }
  };

  return (
    <div css={articleLike}>
      <span onClick={handleClick} css={[blockStyle, isReactionable && likeButtonCursorStyle]}>
        {isLike ? (
          <img src="/assets/images/Icon/Favorite.svg" alt="좋아요" />
        ) : (
          <img src="/assets/images/Icon/notFavorite.svg" alt="좋아요 취소" />
        )}
        <div css={likeCountStyle}>{likeCount}</div>
      </span>
    </div>
  );
};

const articleLike = css`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const blockStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50px;
  margin: 1rem 0 1rem 0;

  img {
    width: 100%;
    margin-right: 0.5rem;
  }
`;

const likeButtonCursorStyle = css`
  cursor: pointer;
`;

const likeCountStyle = css`
  display: flex;
  color: ${theme.textGray4};
`;

export default ArticleLike;
