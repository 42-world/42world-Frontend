import { Link } from 'react-router-dom';

import PreviewArticle from '@components/organisms/category/PreviewArticle';
import { useMyArticleBoard } from '@components/pages/Mypage/hooks';

import { StyledMyArticleBoard, StyledMyArticlePageSelector } from '@components/pages/Mypage/styles';
import constants from '../constants';

const MyArticleBoard = ({ articleType }) => {
  const {
    articles,
    articleInfo,
    curPage,
    pageList,
    handleClickGoBack,
    handleClickPrev,
    handleClickNext,
    handleClickPageNum,
  } = useMyArticleBoard(articleType);

  return (
    <StyledMyArticleBoard>
      <div className="title">
        <h1>{articleInfo.title}</h1>
        <button className="go-back" onClick={handleClickGoBack}>
          {'< 돌아가기'}
        </button>
      </div>
      <div className="article-list">
        {articles.map((article, id) => (
          //TODO: article 이름 수정
          <Link
            to={`/article/${articleType === constants.COMMENT ? article.article.id : article.id}`}
            className="article-content"
            key={id}
          >
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <div className="page-selector">
        <button onClick={handleClickPrev}>&lt;</button>
        {pageList.map(page => (
          <button key={page} className={page === curPage ? 'cur-page' : ''} onClick={() => handleClickPageNum(page)}>
            {page}
          </button>
        ))}
        <button onClick={handleClickNext}>&gt;</button>
      </div>
    </StyledMyArticleBoard>
  );
};

export default MyArticleBoard;
