import { ArticleProps } from '@components/pages/articles/common/types';
import { getCreatedAt } from '@components/pages/articles/common/utils';

const ArticleDetailInfo = ({ article }: ArticleProps) => {
  return (
    <div>
      글정보
      <div>⏱ {getCreatedAt(article.createdAt)}</div>
      <div>👀 {article.viewCount}</div>
      <div>💬 {article.likeCount}</div>
    </div>
  );
};

export default ArticleDetailInfo;
