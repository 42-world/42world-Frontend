//import React, { useState } from "react";
import qs from 'qs';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import { AuthService, UserService } from '../../network';
import { userState } from '../../store/user';
import Seoul42 from '../organisms/auth/Seoul42';

const Auth = ({ isCallback }) => {
  return (
    <AuthBlock>
      <div className="video-container">
        <video src="assets/videos/video-1.mp4" type="video/mp4" autoPlay loop muted />
        <Seoul42 />
      </div>
    </AuthBlock>
  );
};

const AuthBlock = styled.div`
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
