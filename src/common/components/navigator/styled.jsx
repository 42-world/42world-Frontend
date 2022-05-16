import styled from 'styled-components';

export const StyledMenuButton = styled.button`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textWhite};
  font-weight: bold;
  font-size: 1rem;
  margin: 0 10px;

  /* reset css */
  background: inherit;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  outline: 0;
`;
