import React from 'react';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import PreviewArticleItems from './PreviewArticleItems';
import PreviewHeader from './PreviewHeader';

const PreviewArticleBoard = ({ categoryName, onClickHandler, path, items }) => {
  return (
    <StyledPreviewContainer>
      <PreviewHeader
        onClickHandler={onClickHandler}
        path={path}
        categoryName={categoryName}
      />
      <PreviewArticleItems items={items} />
    </StyledPreviewContainer>
  );
};

const StyledPreviewContainer = styled.div`
  width: 400px;
  height: 300px;
  border-radius: 10px;
  box-shadow: 0px 1px 5px ${theme.shadowGray};
  margin: 10px;
`;

export default PreviewArticleBoard;
