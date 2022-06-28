import styled from 'styled-components';

const StyledLinkBox = styled.li`
  display: flex;
  align-items: center;
  svg {
    margin: 0.3rem;
    margin-right: 0.6rem;
    min-width: 1.3rem;
    width: 1.3rem;
  }
  span {
    max-width: 13rem;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &:hover {
    cursor: pointer;
  }
`;

export default StyledLinkBox;
