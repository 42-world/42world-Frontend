import React from "react";
import styled from "styled-components";

import MypageButton from "./MypageButton";

const ProfileSection = ({ imgRef, userName }) => {
  return (
    <ProfileSectionDiv>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={imgRef} />
        <MypageButton windowWidth={window.innerWidth}>사진 변경</MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType="auth-42" windowWidth={window.innerWidth}>
            42인증
          </MypageButton>
          <MypageButton windowWidth={window.innerWidth}>로그아웃</MypageButton>
        </div>
      </div>
    </ProfileSectionDiv>
  );
};

const ProfileSectionDiv = styled.div`
  width: ${(props) => (props.windowWidth <= 960 ? "65%" : "75%")};
  display: flex;
  align-items: center;
  .mypage-photo-sect {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    img {
      ${(props) =>
        props.windowWidth <= 450
          ? "width: 55%"
          : props.windowWidth <= 550
          ? "width: 50%"
          : "height: 50%"};
      border: 2px solid black;
      border-radius: 50%;
      margin-bottom: 5px;
    }
  }
  .mypage-auth-sect {
    width: 60%;
    h1 {
      display: flex;
      align-items: center;
      font-size: ${(props) => (props.windowWidth <= 960 ? "20px" : "30px")};
      text-overflow: ellipsis;
      margin: ${(props) =>
        props.windowWidth < props.windowHeight
          ? "5px 5px 5px 8px"
          : "20px 5px 20px 5px"};
    }
    .mypage-auth-button {
      margin: ${(props) =>
        props.windowWidth < props.windowHeight
          ? "5px 5px 5px 8px"
          : "20px 5px 20px 5px"};
      button {
        margin-right: 5px;
      }
    }
  }
`;

const MypageButton = styled.button`
  padding: 2pt 5pt;
  margin: 3px 0;
  border: none;
  width: ${(props) =>
    props.windowWidth <= 640
      ? "80%"
      : props.windowWidth <= 360
      ? "100%"
      : "40%"};
  height: ${(props) =>
    props.windowWidth <= 640
      ? "fit-content"
      : props.windowWidth <= 960
      ? "20pt"
      : "25pt"};
  font-size: ${(props) =>
    props.windowWidth <= 960
      ? "8pt"
      : props.windowWidth <= 1280
      ? "10pt"
      : "15pt"};
  background-color: ${(props) =>
    props.btnType === "auth-42" ? props.theme.primary : props.theme.secondary};
  color: white;
`;

export default ProfileSection;
