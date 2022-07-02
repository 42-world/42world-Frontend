import { BiCommentDots } from 'react-icons/bi';
import styled from 'styled-components';
import { theme } from '@styles/theme';

const CommentCount = ({ count }) => {
  return (
    <StyledCommentCount>
      <BiCommentDots color={theme.textBlue} size={'20px'} />
      <StyledCountText>{count}</StyledCountText>
    </StyledCommentCount>
  );
};

const StyledCommentCount = styled.div`
  display: flex;
  color: ${props => props.theme.textBlue};
`;

const StyledCountText = styled.div`
  margin-left: 4px;
  line-height: 20px;
`;

export default CommentCount;
