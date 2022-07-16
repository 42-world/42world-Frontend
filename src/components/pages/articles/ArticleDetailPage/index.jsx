import { Body } from '@root/components/atoms/Board';
import { ArticleContent, Comment } from '@root/components/organisms/article';
import { ArticleService } from '@root/network';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Board from '../common/Board';

const ArticleDetail = () => {
  const params = useParams();
  const { id } = params;

  const [article, setArticle] = useState();

  useEffect(() => {
    (async () => {
      let data = await ArticleService.getArticleByAritlceId(id);
      setArticle(data);
    })();
  }, []);

  return (
    <Board categoryId={article?.categoryId}>
      <div className="block article_block">
        {article ? (
          <>
            <ArticleContent article={article} />
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

export default ArticleDetail;
