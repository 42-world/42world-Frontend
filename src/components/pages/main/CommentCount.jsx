import { BiCommentDots } from 'react-icons/bi';
import { theme } from 'styles/theme';
import styled from 'styled-components';

const CommentCount = ({ count }) => {
  console.log(count);
  return (
    <StyledCommentCount>
      <BiCommentDots color={theme.textBlue} />
      {count}
    </StyledCommentCount>
  );
};

const StyledCommentCount = styled.div`
  color: ${theme.textBlue};
  text-decoration: none;
`;

export default CommentCount;
