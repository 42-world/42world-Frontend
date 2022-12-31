/** @jsxImportSource @emotion/react */

import { useNavigate } from 'react-router-dom';
import { AiOutlineHeart } from 'react-icons/ai';
import { BiCommentDots } from 'react-icons/bi';

import {
  articlePreviewWrapper,
  articleHeaderWrapper,
  reactionWrapper,
  like,
  comment,
} from '@components/pages/Mypage/styles/ArticlePreview.styles';

interface Props {
  id: number;
  title: string;
  likeCount: number;
  commentCount: number;
}

const ArticlePreview = ({ id, title, likeCount, commentCount }: Props) => {
  const navigate = useNavigate();

  const handleClickArticle = () => {
    navigate(`/article/${id}`);
  };

  return (
    <div css={articlePreviewWrapper} onClick={handleClickArticle}>
      <h3 css={articleHeaderWrapper}>{title}</h3>
      <div css={reactionWrapper}>
        <div css={like(likeCount)}>
          <AiOutlineHeart />
          <span>{likeCount}</span>
        </div>
        <div css={comment(commentCount)}>
          <BiCommentDots />
          <span>{commentCount}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticlePreview;
