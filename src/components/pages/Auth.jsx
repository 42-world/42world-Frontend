import styled from 'styled-components';
import Seoul42 from '../organisms/auth/Seoul42';

const Auth = ({ isCallback }) => {
  return (
    <AuthBlock>
      <StyledImg src="assets/main_background.webp" />
      <Seoul42 />
    </AuthBlock>
  );
};

const StyledImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
`;

const AuthBlock = styled.div`
  position: fixed;
  scrollbar-width: none;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export default Auth;
