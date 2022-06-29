import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserService } from 'network';

import PreviewArticle from 'components/organisms/category/PreviewArticle';
import MyArticlePageSelector from './MyArticlePageSelector';
import constants from './constants';

import { StyledMyArticleBoard } from '../styles';

const MyArticleBoard = ({ articleType }) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const navi = useNavigate();
  const articleInfo = {
    [constants.ARTICLE]: { fetchFunc: UserService.getMyArticles(1), title: '내 게시글' },
    [constants.COMMENT]: { fetchFunc: UserService.getMyComments(1), title: '내 댓글' },
    [constants.LIKED]: { fetchFunc: UserService.getLikeArticles(1), title: '좋아요한 글' },
  };

  const handleClickGoBack = () => {
    navi('/mypage');
  };

  useEffect(() => {
    const fetchMyArticles = async () => {
      const response = await articleInfo.fetchFunc;
      setArticles(response.data);
      setPageCount(response.meta.pageCount);
    };

    fetchMyArticles();
  }, [articleType, page]);

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
          <Link to={`/article/${article.id}`} className="article-content" key={id}>
            <PreviewArticle article={article} />
          </Link>
        ))}
      </div>
      <MyArticlePageSelector curPage={page} setCurPage={setPage} pageCount={pageCount} />
    </StyledMyArticleBoard>
  );
};

export default MyArticleBoard;
