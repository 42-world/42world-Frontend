import { ArticleProps } from '@components/pages/articles/common/types';
import Like from './Like';

const ArticleContent = ({ article }: ArticleProps) => (
  <div>
    <div>글내용 {article.content}</div>
    <Like article={article} />
  </div>
);

export default ArticleContent;
