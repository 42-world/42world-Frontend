import React, { useEffect } from 'react';
import qs from 'qs';
import styled from 'styled-components';

import { AuthService } from 'network';
import { useLocation } from 'react-router-dom';

const LOGIN_ERROR_MESSAGE = '로그인 실패하였습니다. 다시 시도해주세요';

const Login = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const onClickButton = () => {
    const res = AuthService.getAuthUrl();
    window.location.href = res;
  };

  const isLoggedIn = () => {
    return pathname.match(/\/auth*/);
  };

  useEffect(() => {
    (async () => {
      if (isLoggedIn()) {
        try {
          const { code } = qs.parse(window.location.search, {
            ignoreQueryPrefix: true,
          });
          if (code) {
            const res = await AuthService.getAuthAccessToken(code);
            if (res.status == 200) {
              window.location.href = '/';
            } else {
              throw new Error(LOGIN_ERROR_MESSAGE);
            }
          }
        } catch (e) {
          window.alert(e.message);
          window.location.href = '/login';
        }
      }
    })(),
      [];
  });

  return (
    <>
      <div>
        <div>
          <img src="assets/images/logo/Logo@1x.png" alt="Logo" />
        </div>
        <div>
          <div>
            <p>42WORLD 커뮤니티는</p>
            <p>
              42서울인들과{' '}
              <HighlightText>취업자/창업자/알럼나이/카뎃을</HighlightText>
            </p>
            <p>아우르는 통합 커뮤니티 채널입니다.</p>
            <p>여러분의 피드백을 받아</p>
            <p>지속적인 업데이트가 이루어 집니다.</p>
          </div>
          <div>
            <button onClick={onClickButton}>Github Login</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

const HighlightText = styled.span`
  color: var(--primary-point);
`;
