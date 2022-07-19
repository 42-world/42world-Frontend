import { ArticleProps } from '@components/pages/articles/common/types';
import { Viewer } from '@toast-ui/react-editor';
import ArticleLike from './ArticleLike';

const ArticleContent = ({ article }: ArticleProps) => (
  <div>
    <Viewer initialValue={article.content} />
    <ArticleLike article={article} />
  </div>
);

export default ArticleContent;
