import { Link } from 'react-router-dom';

import PreviewArticle from '@components/pages/articles/ArticleListPage/components/PreviewArticle';
import { Article } from '@root/network/types/Article';
import { useGetLikeArticles } from '@components/pages/Mypage/hooks';
import PageSelector from '@components/pages/Mypage/components/MyArticleBoard/PageSelector';

const LikeArticleList = () => {
  const { likeArticles, maxPage } = useGetLikeArticles();
  return (
    <>
      <div className="article-list">
        {likeArticles.map((article: Article, index: number) => (
          <Link to={`/article/${article.id}`} className="article-content" key={`article-${index}`}>
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <PageSelector maxPage={maxPage} />
    </>
  );
};

export default LikeArticleList;
