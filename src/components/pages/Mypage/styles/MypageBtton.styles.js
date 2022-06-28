import styled from 'styled-components';

const StyledMypageButton = styled.button`
  padding: 0.1rem 1rem;
  margin: 0.1rem;
  border: none;
  width: 6rem;
  height: 1.6rem;
  font-size: 0.8rem;
  white-space: nowrap;
  background-color: ${props =>
    props.btnType === 'auth-42'
      ? props.theme.primary
      : props.btnType === 'auth-42-done'
      ? props.theme.buttonGray1
      : props.theme.secondary};
  &:hover {
    cursor: ${props => (props.btnType === 'auth-42-done' ? 'default' : 'pointer')};
  }
  color: ${props => props.theme.white};
`;

export default StyledMypageButton;
