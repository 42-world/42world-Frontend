import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import Board from '../common/Board';
import ArticleContainer from './components/article/ArticleContainer';
import CommentContainer from './components/comment/CommentContainer';
import { useGetArticleById } from '@root/common/hooks/api/article';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { isError, article } = useGetArticleById(id);
  const navigator = useNavigate();

  useEffect(() => {
    if (isError) {
      window.alert('접근할 수 없습니다.');
      navigator('/');
    }
  }, [isError]);

  return (
    <Board categoryId={article?.categoryId}>
      <div className="block article_block">
        {article ? (
          <>
            <ArticleContainer article={article} />
            <CommentContainer articleId={article.id} />
          </>
        ) : (
          <></>
        )}
      </div>
    </Board>
  );
};

export default ArticleDetailPage;
