//import React, { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useSetRecoilState } from "recoil";
import { userState } from "../../store/user";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { AuthService, UserService } from "../../network";
import Seoul42 from "../organisms/auth/Seoul42";

const Auth = ({ isCallback }) => {
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
          alert("다시 로그인 하세요!"); // 임시
          navigate("/login");
          return;
        }
        const result = await AuthService.getAuthAccessToken(github_code);
        if (result.status !== 200) {
          alert("깃허브 로그인 오류! 다시 로그인 하세요!"); // 임시
          navigate("/login");
          return;
        }
        const userData = await UserService.getNoviceProfile();
        setUser([userData]);
        navigate("/");
      }
    })();
  }, [isCallback, navigate, queryData.code, setUser]);

  return (
    <AuthBlock>
      <div className="video-container">
        <video
          src="assets/videos/video-1.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        <Seoul42 />
      </div>
    </AuthBlock>
  );
};

const AuthBlock = styled.div`
  background: url("/images/img-home.jpg") center center/cover no-repeat;
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
      video {
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
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
    }
  }
`;

export default Auth;
