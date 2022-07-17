import { ArticleProps } from '@components/pages/articles/common/types';
import ArticleLike from './ArticleLike';

const ArticleContent = ({ article }: ArticleProps) => (
  <div>
    <div>글내용 {article.content}</div>
    <ArticleLike article={article} />
  </div>
);

export default ArticleContent;
