import styled from 'styled-components';
import { IoMdThumbsUp } from 'react-icons/io';

const PreviewHeader = ({ categoryName, onClickHandler, path }) => {
  return (
    <StyledPreviewHeader onClick={() => onClickHandler(path)}>
      <StyledCategoryName>
        <IoMdThumbsUp />
        <div>{categoryName}</div>
      </StyledCategoryName>
      <StyledMoreText>더보기{'>'}</StyledMoreText>
    </StyledPreviewHeader>
  );
};

const StyledPreviewHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.buttonGray2};
  font-size: 18px;
  font-weight: bold;
  padding: 0.9rem 1rem 0.8rem 1rem;
  cursor: pointer;
  &:hover {
    background-color: ${props => props.theme.buttonGray2};
    border-radius: 10px 10px 0 0;
  }
`;

const StyledCategoryName = styled.div`
  & > div {
    margin-left: 0.5rem;
  }
  & > svg {
    z-index: -1;
    transform: translateY(-2px);
  }
  display: flex;
  justify-content: space-around;
`;

const StyledMoreText = styled.div`
  font-size: 16px;
  font-weight: bold;
`;
export default PreviewHeader;
