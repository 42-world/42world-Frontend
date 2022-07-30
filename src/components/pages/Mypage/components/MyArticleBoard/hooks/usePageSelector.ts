import { useState, useEffect } from 'react';

const usePageSelector = (maxPage: number) => {
  const [curPage, setCurPage] = useState(1);
  const [pageList, setPageList] = useState<number[]>([]);

  const getPageList = () => {
    const pageList = [];
    if (maxPage < 5) {
      for (let i = 1; i <= maxPage; i++) {
        pageList.push(i);
      }
    } else if (curPage > 2 && curPage < maxPage - 2) {
      for (let i = curPage - 2; i <= curPage + 2; i++) {
        pageList.push(i);
      }
    } else if (curPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageList.push(i);
      }
    } else if (curPage >= maxPage - 3) {
      for (let i = maxPage - 4; i <= maxPage; i++) {
        pageList.push(i);
      }
    }
    return pageList;
  };

  const handleClickPrev = () => {
    setCurPage(1);
  };

  const handleClickPageNum = (page: number) => {
    setCurPage(page);
  };

  const handleClickNext = () => {
    setCurPage(maxPage);
  };

  useEffect(() => {
    setPageList(getPageList());
  }, [maxPage]);

  return { pageList, curPage, handleClickPrev, handleClickNext, handleClickPageNum };
};

export default usePageSelector;
