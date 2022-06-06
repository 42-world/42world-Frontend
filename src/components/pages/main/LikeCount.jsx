import { HiOutlineHeart } from 'react-icons/hi';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const LikeCount = ({ count }) => {
  return (
    <StyledLikeCount>
      <div>
        <HiOutlineHeart color={theme.textRed} />
      </div>
      <div>{count}</div>
    </StyledLikeCount>
  );
};

const StyledLikeCount = styled.div`
  display: flex;
  color: ${theme.textRed};
  margin-right: 10px;
`;

export default LikeCount;
