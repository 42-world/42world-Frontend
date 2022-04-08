import React from "react";
import styled from "styled-components";

const ProfileSection = ({ imgRef, userName }) => {
  return (
    <ProfileSectionDiv>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={imgRef} />
        <MypageButton btnType="change-photo">사진 변경</MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType="auth-42">42인증</MypageButton>
          <MypageButton>로그아웃</MypageButton>
        </div>
      </div>
    </ProfileSectionDiv>
  );
};

const ProfileSectionDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  align-items: center;
  .mypage-photo-sect {
    width: fit-content;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    img {
      width: 5rem;
      border: 2px solid black;
      border-radius: 50%;
      margin-bottom: 0.5rem;
      @media screen and (max-width: 320px) {
        width: 4rem;
      }
      @media screen and (min-width: 769px) {
        width: 6rem;
      }
    }
    button {
      width: 5rem;
    }
  }
  .mypage-auth-sect {
    padding: 0 0.5rem;
    padding-left: 1rem;
    overflow: hidden;
    h1 {
      height: 2rem;
      margin: 0.1rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
      text-overflow: ellipsis;
    }
  }
`;

const MypageButton = styled.button`
  padding: 0.1rem 1rem;
  margin: 0.1rem;
  border: none;
  width: 6rem;
  height: 1.6rem;
  font-size: 0.8rem;
  background-color: ${(props) =>
    props.btnType === "auth-42" ? props.theme.primary : props.theme.secondary};
  color: white;
`;

export default ProfileSection;
