import styled from 'styled-components';
import Seoul42 from '../organisms/auth/Seoul42';

const Auth = ({ isCallback }) => {
  return (
    <AuthBlock>
      <Seoul42 />
    </AuthBlock>
  );
};

const AuthBlock = styled.div`
  position: fixed;
  scrollbar-width: none;

  background: url('assets/main_background.jpeg') no-repeat center center/cover;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export default Auth;
