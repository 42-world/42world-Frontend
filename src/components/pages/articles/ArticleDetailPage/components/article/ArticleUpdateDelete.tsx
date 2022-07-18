import { useNavigate } from 'react-router-dom';

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
      <button onClick={handleClickUpdate}>수정</button>
      <button onClick={handleClickDelete}>삭제</button>
    </>
  );
};

export default ArticleUpdateDelete;
