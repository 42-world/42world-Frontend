import styled, { css } from 'styled-components';
import { numberRange } from '@common/utils';
import { useMemo } from 'react';

const PageSelector = ({ currentPage = 1, onChangePage, totalPageCount, pageDisplayRange = 5 }) => {
  const pageList = useMemo(() => {
    const start = parseInt(currentPage / pageDisplayRange);
    const startPage = start * pageDisplayRange + 1;
    const endPage = Math.min((start + 1) * pageDisplayRange, totalPageCount);

    return numberRange(startPage, endPage);
  }, [currentPage, pageDisplayRange, totalPageCount]);

  return (
    <PageSelectorBlock>
      <PageButton onClick={() => onChangePage(1)}>&lt;</PageButton>
      {pageList.map(page => (
        <PageButton key={page} onClick={() => onChangePage(page)} isCurrentPage={page === currentPage}>
          {page}
        </PageButton>
      ))}
      <PageButton onClick={() => onChangePage(totalPageCount)}>&gt;</PageButton>
    </PageSelectorBlock>
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
