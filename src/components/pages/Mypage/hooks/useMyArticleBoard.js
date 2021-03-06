import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import getArticleInfo from '@components/pages/Mypage/utils/myArticlePreviewUtils';

const useMyArticleBoard = articleType => {
  const [articles, setArticles] = useState([]);
  const [curPage, setCurPage] = useState(1);
  const [pageCount, setPageCount] = useState(1);
  const [pageList, setPageList] = useState([]);
  const navigate = useNavigate();
  const articleInfo = getArticleInfo(articleType);

  const fetchMyArticles = async () => {
    const response = await articleInfo.fetchFunc;
    setArticles(response.data);
    setPageCount(response.meta.pageCount);
  };

  const getPageList = () => {
    const pageList = [];
    if (pageCount < 5) {
      for (let i = 1; i <= pageCount; i++) {
        pageList.push(i);
      }
    } else if (curPage > 2 && curPage < pageCount - 2) {
      for (let i = curPage - 2; i <= curPage + 2; i++) {
        pageList.push(i);
      }
    } else if (curPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageList.push(i);
      }
    } else if (curPage >= pageCount - 3) {
      for (let i = pageCount - 4; i <= pageCount; i++) {
        pageList.push(i);
      }
    }
    return pageList;
  };

  const handleClickGoBack = () => {
    navigate('/mypage');
  };

  const handleClickPrev = () => {
    setCurPage(1);
  };

  const handleClickPageNum = page => {
    setCurPage(page);
  };

  const handleClickNext = () => {
    setCurPage(pageCount);
  };

  useEffect(() => {
    fetchMyArticles();
  }, [articleType, curPage]);

  useEffect(() => {
    setPageList(getPageList());
  }, [pageCount]);

  return {
    articles,
    articleInfo,
    curPage,
    pageList,
    handleClickGoBack,
    handleClickPrev,
    handleClickNext,
    handleClickPageNum,
  };
};

export default useMyArticleBoard;
