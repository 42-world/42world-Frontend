import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import PreviewArticleItems from './PreviewArticleItems';
import PreviewHeader from './PreviewHeader';

const PreviewArticleBoard = ({ categoryName, onClickHandler, path, items, maxItemCount = 6 }) => {
  const itemList = maxItemCount ? items.slice(0, maxItemCount) : items;

  return (
    <StyledPreviewContainer>
      <PreviewHeader onClickHandler={onClickHandler} path={path} categoryName={categoryName} />
      <PreviewArticleItems items={itemList} />
    </StyledPreviewContainer>
  );
};

const StyledPreviewContainer = styled.div`
  width: calc(50% - 10px);
  border-radius: 10px;
  /*box-shadow: 0px 1px 5px ${theme.shadowGray};*/
  border: 1px solid ${theme.lineGray1};
  box-shadow: ${theme.boxShadow};
  margin-bottom: 20px;

  @media screen and (max-width: 930px) {
    width: 100%;
  }
`;

export default PreviewArticleBoard;
