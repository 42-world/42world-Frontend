/** @jsxImportSource @emotion/react */
import { useState } from 'react';
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
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
    <div css={articleLike}>
      <span onClick={handleClick} css={blockStyle}>
        {isLike ? (
          <img src="/assets/images/Icon/Favorite.svg" alt="좋아요" />
        ) : (
          <img src="/assets/images/Icon/notFavorite.svg" alt="좋아요 취소" />
        )}
        <div css={[blockStyle, likeCountStyle]}>{likeCount}</div>
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
  width: 70px;
  margin: 1rem 0 1rem 0.5rem;
  cursor: pointer;
  img {
    width: 100%;
    margin-right: 1rem;
  }
`;

const likeCountStyle = css`
  display: flex;
  width: max-content;
  color: ${theme.textGray4};
`;

export default ArticleLike;
