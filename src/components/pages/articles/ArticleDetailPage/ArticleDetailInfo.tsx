import { ArticleProps } from '@components/pages/articles/common/types';
import { getArticleTime } from '@components/pages/articles/common/utils';

const ArticleDetailInfo = ({ article }: ArticleProps) => {
  return (
    <div>
      글정보
      <div>⏱ {getArticleTime(article.createdAt)}</div>
      <div>👀 {article.viewCount}</div>
      <div>💬 {article.likeCount}</div>
    </div>
  );
};

export default ArticleDetailInfo;
