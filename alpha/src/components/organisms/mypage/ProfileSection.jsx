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
  width: ${(props) => (props.windowWidth <= 960 ? "65%" : "75%")};
  border: 1px solid purple;
  padding: 0.5rem;
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
      width: 5rem;
      border: 2px solid black;
      border-radius: 50%;
      margin-bottom: 0.5rem;
    }
    button {
      width: 5rem;
    }
    @media screen and (max-width: 319px) {
      img {
        width: 4rem;
      }
      button {
        width: 4rem;
        padding: 0.1rem 0.5rem;
      }
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
