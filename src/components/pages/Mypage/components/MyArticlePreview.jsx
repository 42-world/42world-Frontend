import { ArticlePreview } from 'components/organisms/main';
import { useMyArticlePreview } from 'components/pages/Mypage/hooks';
import constants from 'components/pages/Mypage/constants';

import { StyledMyArticlePreview } from 'components/pages/Mypage/styles';

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
          id={article.id}
          title={articleType === constants.COMMENT ? article.content : article.title}
          likeCount={articleType ? '' : article.commentCount}
          commentCount={articleType ? '' : article.commentCount}
        /> /* TODO: articleType 들어간 삼항연산자 (47 ~ 48번째 줄) 테스트 필요 */
      ))}
    </StyledMyArticlePreview>
  );
};

export default MyArticlePreview;
