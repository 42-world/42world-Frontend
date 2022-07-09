import { ArticlePreview } from '@components/organisms/main';
import { useMyArticlePreview } from '@components/pages/Mypage/hooks';
import constants from '@components/pages/Mypage/constants';

import { StyledMyArticlePreview } from '@components/pages/Mypage/styles';

const MyArticlePreview = ({ articleType }) => {
  const { articles, articleInfo, handleClickMoreButton } = useMyArticlePreview(articleType);
  return (
    <StyledMyArticlePreview articleType={articleType}>
      <div className="title">
        <h2>{articleInfo.title}</h2>
        <button type="button" className="more" onClick={handleClickMoreButton}>
          {'더 보기 >'}
        </button>
      </div>
      {articles.map(article => (
        <ArticlePreview
          key={article.id}
          id={articleType === constants.COMMENT ? article.article.id : article.id}
          title={articleType === constants.COMMENT ? article.content : article.title}
          likeCount={articleType !== constants.COMMENT ? article.likeCount : ''}
          commentCount={articleType !== constants.COMMENT ? article.commentCount : ''}
        />
      ))}
    </StyledMyArticlePreview>
  );
};

export default MyArticlePreview;
