import React from 'react';
import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';
import { getArticles } from 'common/hooks/api/article';
import PreviewItems from './PreviewItems';
import { useNavigate } from 'react-router-dom';
import { theme } from 'styles/theme';

const PreviewBoard = ({ categoryId, categoryName }) => {
  const navigate = useNavigate();
  const { articles } = getArticles(categoryId);
  const onClick = categoryId => {
    navigate(`/category/${categoryId}`);
  };
  return (
    <>
      <StyledPrivewContainer>
        <StyledPrivewHeader onClick={() => onClick(categoryId)}>
          <StyledCategoryName>
            <IoMdThumbsUp />
            <div>{categoryName}</div>
          </StyledCategoryName>
          <StyledMoreText>더보기{'>'}</StyledMoreText>
        </StyledPrivewHeader>
        <PreviewItems articles={articles} />
      </StyledPrivewContainer>
    </>
  );
};

const StyledPrivewContainer = styled.div`
  border: 1px solid #424242;
  color: black;
  width: 400px;
  height: 300px;
  border-radius: 10px;
`;

const StyledPrivewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 12.5px 10px 35px 10px;
  border-bottom: 1px solid ${theme.buttonGray2};
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${theme.buttonGray2};
    border-radius: 10px 10px 0 0;
  }
`;

const StyledCategoryName = styled.div`
  display: flex;
  justify-content: space-around;
  width: 8rem;
  height: 40px;
`;

const StyledMoreText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

export default PreviewBoard;
