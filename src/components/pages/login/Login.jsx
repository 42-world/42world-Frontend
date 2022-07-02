import React from 'react';
import styled from 'styled-components';

import { CircularProgress } from '@mui/material';

import useLogin from './hooks/useLogin';

const Login = () => {
  const { onClickButton, isAuthCallbackProcess } = useLogin();

  return (
    <Container>
      <StyledLogin>
        <div>
          <img src="assets/images/logo/Logo@1x.png" alt="Logo" />
        </div>
        <div>
          <div>
            <p>42WORLD 커뮤니티는</p>
            <p>
              42서울인들과
              <HighlightText>취업자/창업자/알럼나이/카뎃을</HighlightText>
            </p>
            <p>아우르는 통합 커뮤니티 채널입니다.</p>
            <p>여러분의 피드백을 받아</p>
            <p>지속적인 업데이트가 이루어 집니다.</p>
          </div>
          <div>
            {isAuthCallbackProcess() ? <CircularProgress /> : <button onClick={onClickButton}>Github Login</button>}
          </div>
        </div>
      </StyledLogin>
    </Container>
  );
};

export default Login;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url('/assets/videos/42seoul_login.jpg') no-repeat center center/cover;
`;

const StyledLogin = styled.div``;

const HighlightText = styled.span`
  color: ${props => props.theme.textBlue};
  font-weight: 700;
`;
