import styled from 'styled-components';

const StyledProfileImage = styled.img`
  border-radius: 50%;
  margin-left: 0.5rem;
  width: 3rem;
  height: 3rem;

  ${props => props.theme.mobileSize} {
    margin-left: 0;
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const StyledUserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  border-radius: 3.5rem;
  background-color: ${({ theme }) => theme.backgroundTheme4};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }

  ${props => props.theme.mobileSize} {
    padding-left: 0;
    .username-div {
      display: none;
    }
  }
`;

export { StyledUserName, StyledProfileImage };
