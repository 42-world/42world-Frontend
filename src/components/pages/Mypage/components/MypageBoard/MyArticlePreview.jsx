import { useMyArticlePreview } from '@components/pages/Mypage/hooks';
import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';
import ArticlePreview from '@components/pages/Mypage/components/MypageBoard/ArticlePreview';

import { StyledMyArticlePreview } from '@components/pages/Mypage/styles';

const MyArticlePreview = ({ title, type, articleListArray, hrefLink }) => {
  const { handleClickMoreButton } = useMyArticlePreview(hrefLink);

  return (
    <StyledMyArticlePreview type={type}>
      <div className="title">
        <h2>{title}</h2>
        <button type="button" className="more" onClick={handleClickMoreButton}>
          {'더 보기 >'}
        </button>
      </div>
      {articleListArray.map(article => (
        <ArticlePreview
          key={`${type}-${article.id}`}
          id={type === ARTICLE_TYPE.COMMENT ? article.article.id : article.id}
          title={type === ARTICLE_TYPE.COMMENT ? article.content : article.title}
          likeCount={type !== ARTICLE_TYPE.COMMENT ? article.likeCount : ''}
          commentCount={type !== ARTICLE_TYPE.COMMENT ? article.commentCount : ''}
        />
      ))}
    </StyledMyArticlePreview>
  );
};

export default MyArticlePreview;
