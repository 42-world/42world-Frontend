/** @jsxImportSource @emotion/react */

import { usePageSelector } from '@components/pages/Mypage/hooks';
import { pageSelectorButton, pageSelectorWrapper } from '@components/pages/Mypage/styles/PageSelector.styles';

interface Props {
  maxPage: number;
}

const PageSelector = ({ maxPage }: Props) => {
  const { pageList, curPage, handleClickPrev, handleClickNext, handleClickPageNum } = usePageSelector(maxPage);

  return (
    <div css={pageSelectorWrapper}>
      <button css={pageSelectorButton(false)} onClick={handleClickPrev}>
        &lt;
      </button>
      {pageList.map(page => (
        <button
          key={`pagelist-${page}`}
          css={pageSelectorButton(page === curPage)}
          onClick={() => handleClickPageNum(page)}
        >
          {page}
        </button>
      ))}
      <button css={pageSelectorButton(false)} onClick={handleClickNext}>
        &gt;
      </button>
    </div>
  );
};

export default PageSelector;
