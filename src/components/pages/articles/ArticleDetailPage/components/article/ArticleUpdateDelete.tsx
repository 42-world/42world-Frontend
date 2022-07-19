/** @jsxImportSource @emotion/react */
import { useNavigate } from 'react-router-dom';
import { css } from '@emotion/react';

import { ArticleService } from '@root/network';
import { URLs } from '@common/urls';
import { IdProps } from '@components/pages/articles/common/types';

const ArticleUpdateDelete = ({ articleId, categoryId }: IdProps) => {
  const navigate = useNavigate();
  const handleClickUpdate = () => {
    navigate(`${URLs.WRITING}/${articleId}`);
  };

  const handleClickDelete = async () => {
    if (window.confirm('삭제하시겠습니까?')) {
      const res = await ArticleService.deleteArticle(articleId);
      navigate(`${URLs.CATEGORY}/${categoryId}`);
    }
  };

  return (
    <>
      <button css={buttonStyle} onClick={handleClickUpdate}>
        수정
      </button>
      <button css={buttonStyle} onClick={handleClickDelete}>
        삭제
      </button>
    </>
  );
};

const buttonStyle = css`
  border: none;
  background-color: transparent;
  color: #555;
  font-size: 0.8rem;
  margin-right: 0.4rem;
  font-weight: bold;
  cursor: pointer;
`;

export default ArticleUpdateDelete;
