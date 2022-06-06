import React from 'react';
import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';
import { getArticles } from 'common/hooks/api/article';
import PreviewItems from './PreviewItems';
import StyledLink from './StyledLink';

const PreviewBoard = ({ categoryId, categoryName }) => {
  const { articles } = getArticles(categoryId);
  return (
    <>
      <StyledPrivewContainer>
        <StyledPrivewHeader>
          <StyledCategoryName>
            <div>
              <IoMdThumbsUp />
            </div>
            <div>{categoryName}</div>
          </StyledCategoryName>
          <StyledLink to={`/category/${categoryId}`}>더보기 {'>'}</StyledLink>
        </StyledPrivewHeader>
        <div>
          <div>
            <PreviewItems articles={articles} />
          </div>
        </div>
      </StyledPrivewContainer>
    </>
  );
};

const StyledPrivewContainer = styled.div`
  border: 1px solid #424242;
  color: black;
  width: 400px;
  height: 300px;
  margin: 25px;
  border-radius: 10px;
`;

const StyledPrivewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  padding: 10px 10px 0 0;
`;

const StyledCategoryName = styled.div`
  display: flex;
  justify-content: space-around;
  width: 7.5rem;
  height: 40px;
  /* background-color: #252525; */
`;

export default PreviewBoard;
