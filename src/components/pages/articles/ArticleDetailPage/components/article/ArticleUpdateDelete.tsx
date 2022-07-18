import { useNavigate } from 'react-router-dom';

import { useGetArticleById } from '@common/hooks/api/article';
import { URLs } from '@common/urls';
import { ArticleService } from '@root/network';
import { IdProps } from '@components/pages/articles/common/types';

const ArticleUpdateDelete = ({ articleId, categoryId }: IdProps) => {
  const navigate = useNavigate();
  const { article } = useGetArticleById(articleId);
  const handleClickUpdate = () => {
    // TODO: 수정 페이지로 이동
    navigate(`${URLs.WRITING}`, { state: article });
    // navigate(`${URLs.WRITING}/${articleId}`);
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
