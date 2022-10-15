/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import { Article } from '@root/network/types/Article';
import PreviewArticle from '@components/pages/articles/ArticleListPage/components/PreviewArticle';
import { useGetMyArticles } from '@components/pages/Mypage/hooks';
import PageSelector from '@components/pages/Mypage/components/MyArticleBoard/PageSelector';

import { articleContentWrapper } from '@components/pages/Mypage/styles/MyArticleBoardInner.styles';

const MyArticleList = () => {
  const { articles, maxPage } = useGetMyArticles();
  return (
    <>
      <div>
        {articles.map((article: Article, index: number) => (
          <Link to={`/article/${article.id}`} css={articleContentWrapper} key={`article-${index}`}>
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <PageSelector maxPage={maxPage} />
    </>
  );
};

export default MyArticleList;
