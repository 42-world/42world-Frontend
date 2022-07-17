import { useGetArticleById } from '@common/hooks/api/article';
import { getCategoryName, useGetCategory } from '@common/hooks/api/category';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleContent from './ArticleContent';

interface ArticleContainer {
  articleId: number;
}

const ArticleContainer = ({ articleId }: ArticleContainer) => {
  const { categories } = useGetCategory();
  const { isError, article } = useGetArticleById(articleId);
  const categoryName = getCategoryName(categories, article?.categoryId);
  return (
    <>
      {article && (
        <>
          <ArticleDetailHeader article={article} categoryName={categoryName} />
          <ArticleContent article={article} />
        </>
      )}
    </>
  );
};

export default ArticleContainer;
