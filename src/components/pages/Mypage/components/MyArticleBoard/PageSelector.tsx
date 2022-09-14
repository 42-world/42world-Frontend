import { usePageSelector } from '@components/pages/Mypage/hooks';

interface Props {
  maxPage: number;
}

const PageSelector = ({ maxPage }: Props) => {
  const { pageList, curPage, handleClickPrev, handleClickNext, handleClickPageNum } = usePageSelector(maxPage);

  return (
    <div className="page-selector">
      <button onClick={handleClickPrev}>&lt;</button>
      {pageList.map(page => (
        <button
          key={`pagelist-${page}`}
          className={page === curPage ? 'cur-page' : ''}
          onClick={() => handleClickPageNum(page)}
        >
          {page}
        </button>
      ))}
      <button onClick={handleClickNext}>&gt;</button>
    </div>
  );
};

export default PageSelector;
