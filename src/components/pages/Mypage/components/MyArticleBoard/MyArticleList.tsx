import { Link } from 'react-router-dom';

import PreviewArticle from '@components/pages/articles/ArticleListPage/components/PreviewArticle';
import { Article } from '@root/network/types/Article';
import { useGetMyArticles } from '@components/pages/Mypage/hooks';
import PageSelector from '@components/pages/Mypage/components/MyArticleBoard/PageSelector';

const MyArticleList = () => {
  const { articles, maxPage } = useGetMyArticles();
  return (
    <>
      <div className="article-list">
        {articles.map((article: Article, index: number) => (
          <Link to={`/article/${article.id}`} className="article-content" key={`article-${index}`}>
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <PageSelector maxPage={maxPage} />
    </>
  );
};

export default MyArticleList;
