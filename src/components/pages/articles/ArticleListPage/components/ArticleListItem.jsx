/** @jsxImportSource @emotion/react */

import { Link } from 'react-router-dom';

import PreviewArticle from '@root/components/organisms/category/PreviewArticle';
import CategoryName from './CategoryName';

const ArticleListItem = ({ article, categoryId, categories }) => {
  return (
    <>
      {categoryId ? <></> : <CategoryName article={article} categories={categories} />}
      <Link to={`/article/${article.id}`} className="articleList_content" key={`article_${article.id}`}>
        <PreviewArticle article={article} />
      </Link>
    </>
  );
};

export default ArticleListItem;
