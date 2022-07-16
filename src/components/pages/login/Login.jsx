import React from 'react';
import styled from 'styled-components';

import { CircularProgress } from '@mui/material';

import useLogin from './hooks/useLogin';

const Login = () => {
  const { onClickButton, isAuthCallbackProcess } = useLogin();

  return (
    <Container>
      <StyledLogin>
        <StyledLogo src="/assets/images/logo/Logo@1x.png" alt="Logo" />
        <LoginTextBox>
          <TextContent>42WORLD 커뮤니티는</TextContent>
          <TextContent>
            42서울인들과
            <HighlightText>취업자/창업자/알럼나이/카뎃을</HighlightText>
          </TextContent>
          <TextContent>아우르는 통합 커뮤니티 채널입니다.</TextContent>
          <TextContent>여러분의 피드백을 받아</TextContent>
          <TextContent>지속적인 업데이트가 이루어 집니다.</TextContent>
          {isAuthCallbackProcess() ? (
            <CircularProgress />
          ) : (
            <LoginButton onClick={onClickButton}>Github 로그인</LoginButton>
          )}
        </LoginTextBox>
      </StyledLogin>
    </Container>
  );
};

export default Login;

const StyledLogo = styled.img`
  width: 15rem;
  margin-bottom: 1rem;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;

  background: url('assets/main_background.jpeg') no-repeat center center/cover;

  h1 {
    font-size: 1.2rem;
    font-weight: bold;
    margin-bottom: 2rem;
  }
`;

const StyledLogin = styled.div`
  color: ${props => props.theme.textWhite};

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const LoginTextBox = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  background-color: ${props => props.theme.backgroundWhite};
  text-align: center;
`;

const TextContent = styled.p`
  color: ${props => props.theme.textBlack};
  text-align: center;
  font-weight: bold;
  margin-bottom: 0.4rem;
`;

const HighlightText = styled.span`
  color: ${props => props.theme.textBlue};
  font-weight: 700;
`;

const LoginButton = styled.button`
  width: calc(100% - 4rem);

  margin: 1rem 2rem 0 2rem;
  padding: 0.4rem;

  border: none;
  border-radius: 0.5rem;

  color: ${props => props.theme.textWhite};
  background-color: #2a2d38;

  cursor: pointer;
`;
