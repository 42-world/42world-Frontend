import { useGetArticleById } from '@common/hooks/api/article';
import { getCategoryName, useGetCategory } from '@common/hooks/api/category';
import ArticleDetailHeader from './ArticleDetailHeader';
import ArticleContent from './ArticleContent';
import { Article } from '@root/network/types/Article';

interface ArticleContainer {
  article: Article;
}

const ArticleContainer = ({ article }: ArticleContainer) => {
  const { categories } = useGetCategory();
  const categoryName = getCategoryName(categories, article?.categoryId);
  return (
    <>
      <ArticleDetailHeader article={article} categoryName={categoryName} />
      <ArticleContent article={article} />
    </>
  );
};

export default ArticleContainer;
