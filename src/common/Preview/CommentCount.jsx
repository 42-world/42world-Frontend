import { BiCommentDots } from 'react-icons/bi';
import { theme } from 'styles/theme';
import styled from 'styled-components';

const CommentCount = ({ count }) => {
  return (
    <StyledCommentCount>
      <BiCommentDots color={theme.textBlue} />
      <div>{count}</div>
    </StyledCommentCount>
  );
};

const StyledCommentCount = styled.div`
  display: flex;
  color: ${props => props.theme.textBlue};
`;

export default CommentCount;
