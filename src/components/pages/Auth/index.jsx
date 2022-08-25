import { MAIN_BACKGROUND_IMG } from '@root/common/constants';
import styled from 'styled-components';

import Seoul42 from './Seoul42';

const Auth = () => {
  return (
    <AuthBlock>
      <Seoul42 />
    </AuthBlock>
  );
};

const AuthBlock = styled.div`
  position: fixed;
  scrollbar-width: none;

  background: url(${MAIN_BACKGROUND_IMG}) no-repeat center center/cover;

  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  object-fit: contain;
`;

export default Auth;
