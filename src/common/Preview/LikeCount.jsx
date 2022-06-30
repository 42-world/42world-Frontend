import { FaRegHeart } from 'react-icons/fa';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const LikeCount = ({ count }) => {
  return (
    <StyledLikeCount>
      <FaRegHeart color={theme.textRed} size={'20px'} />
      <StyledCountText>{count}</StyledCountText>
    </StyledLikeCount>
  );
};

const StyledLikeCount = styled.div`
  display: flex;
  color: ${props => props.theme.textRed};
  margin-right: 10px;
`;

const StyledCountText = styled.div`
  margin-left: 4px;
  line-height: 20px;
`;

export default LikeCount;
