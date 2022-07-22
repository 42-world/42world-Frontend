/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

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
    <div css={articleDetailHeaderStyle}>
      <ArticleDetailCategory categoryName={categoryName} />
      <ArticleDetailTitle title={article.title} />
      <ArticleDetailWriter writer={article.writer} />
      <ArticleDetailInfo article={article} />
      {article.isSelf && <ArticleUpdateDelete articleId={article.id} categoryId={article.categoryId} />}
    </div>
  );
};

const articleDetailHeaderStyle = css`
  padding: 1rem;
  border-bottom: 1px solid #ddd;
  a {
    text-decoration: none;
    color: black;
  }
  h1 {
    font-size: 1.6rem;
    margin-bottom: 1rem;
  }
  h2 {
    font-size: 1.1rem;
    margin: 0.3rem 0;
  }
  h3 {
    font-size: 0.9rem;
    margin: 0.3rem 0;
  }
  .nickname {
    color: #555;
  }
  .article_info {
    color: #888;
  }
  .edit_article {
  }
`;

export default ArticleDetailHeader;
