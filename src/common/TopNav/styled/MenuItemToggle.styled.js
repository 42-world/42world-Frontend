import styled from 'styled-components';

export const MenuItemToggleBlock = styled.div`
  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin: 0 0.5rem;
  }
  margin: 0;
`;

export const StyledMenuToggleButton = styled.button`
  background-color: ${props => props.theme.secondary};
  color: ${props => props.theme.textWhite};
  font-weight: bold;
  font-size: 1.2rem;
  padding: 1rem 0;
  width: 100%;

  transition: all 0.3s ease-in-out;

  border: none;
  box-shadow: none;
  border-radius: 0;
  overflow: hidden;
  cursor: pointer;
  outline: 0;

  &:hover {
    background-color: ${props => props.theme.primary};
    color: ${props => props.theme.textWhite};
  }
`;

export const CategoryListDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow: hidden;

  width: 80vw;
  min-height: 100vh;
  background-color: ${props => props.theme.secondary};

  transition: all 0.3s ease-in-out;
`;
