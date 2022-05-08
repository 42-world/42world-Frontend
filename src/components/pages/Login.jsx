//import React, { useState } from "react";
import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { AuthService, UserService } from '../../network';
import { userState } from '../../store/user';
import { Signin } from '../organisms/login';

const Login = ({ isCallback }) => {
  const setUser = useSetRecoilState(userState);
  const queryData = qs.parse(window.location.search, {
    ignoreQueryPrefix: true,
  });
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if (isCallback) {
        const github_code = queryData.code;
        if (!github_code) {
          alert('다시 로그인 하세요!'); // 임시
          navigate('/login');
          return;
        }
        const result = await AuthService.getAuthAccessToken(github_code);
        if (result.status !== 200) {
          alert('깃허브 로그인 오류! 다시 로그인 하세요!'); // 임시
          navigate('/login');
          return;
        }
        const userData = await UserService.getNoviceProfile();
        setUser([userData]);
        navigate('/');
      }
    })();
  }, [isCallback, navigate, queryData.code, setUser]);

  return (
    <LoginBlock>
      <div className="video-container">
        <img
          src="assets/videos/42seoul_login.jpg"
          alt="..."
          className="login_bg"
        />
        <Signin />
      </div>
    </LoginBlock>
  );
};

// export const Main = styled.main``;
// export const PageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #fafafa;
// `;

// export const InputText = styled.input`
//   padding-left: 8px;
//   height: 36px;
//   background: #fafafa;
//   border: 1px solid #dbdbdb;
//   border-radius: 3px;
//   & + & {
//     //인접형제결합자 : InputText(&는 현재 쓰는 성분)
//     margin-top: 6px;
//   }
// `;
// export const BtnSubmit = styled.button`
//   margin: 8px 0;
//   padding: 5px 9px;
//   background: #ffc000;
//   color: #000;
//   border: transparent;
//   border-radius: 4px;
//   font-weight: bold;
// `;

// export const SignupWrapper = styled.div`
//   padding: 15px 0;
//   font-size: 14px;
//   a {
//     color: #ffc000;
//     text-decoration: none;
//     font-weight: bold;
//   }
// `;

const LoginBlock = styled.div`
  background: url('/images/img-home.jpg') center center/cover no-repeat;
  @media screen and (min-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      .login_bg {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      .login_bg {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
    }
  }
`;

export default Login;
