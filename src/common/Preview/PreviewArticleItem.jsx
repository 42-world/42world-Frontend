import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { theme } from 'styles/theme';
import CommentCount from './CommentCount';
import LikeCount from './LikeCount';

const PreviewArticleItem = ({ item }) => {
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/article/${item.id}`);
  };
  return (
    <StyledPreviewItemContainer onClick={onClick}>
      <StyledPreviewArticleTitle>{item?.title}</StyledPreviewArticleTitle>
      <StyledIcons>
        <LikeCount count={item.likeCount} />
        <CommentCount count={item?.commentCount} />
      </StyledIcons>
    </StyledPreviewItemContainer>
  );
};

const StyledPreviewItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.buttonGray1};

  padding: 10px 15px 6px 15px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: ${theme.buttonGray1};
  }
`;

const StyledPreviewArticleTitle = styled.div`
  font-weight: 600;
`;

const StyledIcons = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px 10px;
`;

export default PreviewArticleItem;
