import { Body } from '@root/components/atoms/Board';
import { ArticleService } from '@root/network';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../common/Board';
import ArticleContainer from './ArticleContainer';
import ArticleContent from './ArticleContentOld';
import Comment from './Comment';

const ArticleDetailPage = () => {
  const params = useParams();
  const { id } = params;

  const [article, setArticle] = useState();

  useEffect(() => {
    (async () => {
      let data = await ArticleService.getArticleById(id);
      setArticle(data);
    })();
  }, []);

  return (
    <Board categoryId={article?.categoryId}>
      <div className="block article_block">
        {article ? (
          <>
            <ArticleContainer articleId={id} />
            <Comment articleId={id} writer={article.writer} />
          </>
        ) : (
          // TODO: 이쁘게 만들기
          <Body>글이 없다</Body>
        )}
      </div>
    </Board>
  );
};

export default ArticleDetailPage;
