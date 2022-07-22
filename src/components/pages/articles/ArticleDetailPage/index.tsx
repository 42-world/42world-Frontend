/** @jsxImportSource @emotion/react */

import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { css } from '@emotion/react';

import { theme } from '@root/styles/theme';
import { useGetArticleById } from '@root/common/hooks/api/article';
import ArticleContainer from './components/article/ArticleContainer';
import CommentContainer from './components/comment/CommentContainer';
import Board from '../common/Board';
import { block } from '../common/styles';

const ArticleDetailPage = () => {
  const { id = '0' } = useParams();
  const { isError, article } = useGetArticleById(parseInt(id));
  const navigator = useNavigate();

  useEffect(() => {
    if (isError) {
      window.alert('접근할 수 없습니다.');
      navigator('/');
    }
  }, [isError]);

  return (
    <Board categoryId={article?.categoryId}>
      <div css={[block, articleListStyle]}>
        {article && (
          <>
            <div css={categoryBlock}>
              <ArticleContainer article={article} />
            </div>
            <div css={categoryBlock}>
              <CommentContainer articleId={article.id} category={article.category} />
            </div>
          </>
        )}
      </div>
    </Board>
  );
};

const categoryBlock = css`
  display: flex;
  flex-direction: column;

  border-radius: 0.3rem;
  box-shadow: ${theme.boxShadow};
  background-color: #fff;
  text-decoration: none;
  margin-bottom: 1.5rem;

  ${theme.mobileSize} {
    box-shadow: none;
    margin-bottom: 0;
  }
`;

const articleListStyle = css`
  width: 100%;
  max-width: calc(((100% - 15.2rem) - 9rem) - 1.6rem);

  @media screen and (max-width: 1020px) {
    max-width: calc(100% - 15.2rem);
  }

  ${theme.mobileSize} {
    max-width: 100%;
    margin: 0;
  }
`;

export default ArticleDetailPage;
