import styled, { css } from 'styled-components';
import { numberRange } from '@common/utils';

const PageSelector = ({ currentPage = 1, onChangePage, totalPageCount, pageDisplayRange = 5 }) => {
  const start = parseInt((currentPage - 1) / pageDisplayRange);
  const startPage = start * pageDisplayRange + 1;
  const endPage = Math.min((start + 1) * pageDisplayRange, totalPageCount);

  const pageList = () => numberRange(startPage, endPage);

  const handleNextPage = () => {
    if (endPage < totalPageCount) {
      onChangePage(endPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (endPage > pageDisplayRange) {
      onChangePage(startPage - 1);
    }
  };

  return (
    <>
      {totalPageCount !== 0 && (
        <PageSelectorBlock>
          <PageButton onClick={handlePrevPage}>&lt;</PageButton>
          {pageList().map(page => (
            <PageButton key={page} onClick={() => onChangePage(page)} isCurrentPage={page === currentPage}>
              {page}
            </PageButton>
          ))}
          <PageButton onClick={handleNextPage}>&gt;</PageButton>
        </PageSelectorBlock>
      )}
    </>
  );
};

const PageSelectorBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  background-color: ${props => props.theme.backgroundWhite};
`;

const PageButton = styled.button`
  border: none;
  background-color: ${props => props.theme.backgroundWhite};
  color: ${props => props.theme.textBlack};
  padding: 0.3rem 0.5rem;
  margin: 0.2rem;
  border-radius: 0.3rem;
  cursor: pointer;
  ${props =>
    props.isCurrentPage &&
    css`
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.textWhite};
    `}
`;

export default PageSelector;
