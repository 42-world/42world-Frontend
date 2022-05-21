import styled from 'styled-components';

const StyledProfileImage = styled.img`
border-radius: 50%;
margin-left: 0.5rem;
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
`;

export {StyledUserName, StyledProfileImage};