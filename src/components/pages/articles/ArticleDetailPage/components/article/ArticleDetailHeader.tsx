import { ArticleProps } from '@components/pages/articles/common/types';
import ArticleDetailCategory from './ArticleDetailCategory';
import ArticleDetailInfo from './ArticleDetailInfo';
import ArticleDetailTitle from './ArticleDetailTitle';
import ArticleDetailWriter from './ArticleDetailWriter';
import ArticleUpdateDelete from './ArticleUpdateDelete';

interface ArticleDetailHeaderProps extends ArticleProps {
  categoryName?: string;
}
const ArticleDetailHeader = ({ article, categoryName = '' }: ArticleDetailHeaderProps) => {
  return (
    <div>
      <ArticleDetailCategory categoryName={categoryName} />
      <ArticleDetailTitle title={article.title} />
      <ArticleDetailWriter writer={article.writer} />
      <ArticleDetailInfo article={article} />
      {article.isSelf && <ArticleUpdateDelete articleId={article.id} categoryId={article.categoryId} />}
    </div>
  );
};

export default ArticleDetailHeader;
