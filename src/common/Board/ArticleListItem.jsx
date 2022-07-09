import { Link } from 'react-router-dom';
import PreviewArticle from '@components/organisms/category/PreviewArticle';

const ArticleListItem = ({ article }) => {
  return (
    <li key={article.id}>
      <div>{article.category.name}</div>
      <Link to={`/article/${article.id}`}>
        <PreviewArticle article={article} />
      </Link>
    </li>
  );
};

export default ArticleListItem;
