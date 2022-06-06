import { HiOutlineHeart } from 'react-icons/hi';
import styled from 'styled-components';
import { theme } from 'styles/theme';

const LikeCount = ({ count }) => {
  return (
    <StyledLikeCount>
      <HiOutlineHeart color={theme.textRed} />
      {count}
    </StyledLikeCount>
  );
};

const StyledLikeCount = styled.div`
  color: ${theme.textRed};
  text-decoration: none;
`;

export default LikeCount;
