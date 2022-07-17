import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Body } from '@root/components/atoms/Board';
import { ArticleService } from '@root/network';
import Board from '../common/Board';
import ArticleContainer from './components/ArticleContainer';
import CommentContainer from './components/CommentContainer';
import { useGetArticleById } from '@root/common/hooks/api/article';

const ArticleDetailPage = () => {
  const { id } = useParams();
  const { article } = useGetArticleById(id);

  return (
    <Board categoryId={article?.categoryId}>
      <div className="block article_block">
        {article ? (
          <>
            <ArticleContainer article={article} />
            {/* <CommentContainer articleId={article.id} /> */}
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
