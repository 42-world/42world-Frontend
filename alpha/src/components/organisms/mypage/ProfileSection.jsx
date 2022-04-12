import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { MypageButton } from "../../atoms/Mypage";
import AuthButton from "./AuthButton";

const ProfileSection = ({ imgID, userName }) => {
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [profilePhoto, setProfilePhoto] = useState(null);

  const getProfilePhoto = (id) => {
    const PROFILE_LIST = [
      { id: 0, image: "bbo.png" },
      { id: 1, image: "bora.png" },
      { id: 2, image: "ddub.png" },
      { id: 3, image: "nana.png" },
      { id: 4, image: "bongsoon.png" },
      { id: 5, image: "hyeonkim.png" },
      { id: 6, image: "babybbo.png" },
      { id: 7, image: "babynana.png" },
      { id: 8, image: "babybora.png" },
      { id: 9, image: "babyddub.png" },
      { id: 10, image: "babyhyeonkim.png" },
    ];

    const profile = PROFILE_LIST.find((imgRef) => imgRef.id === id);
    return profile?.image;
  };

  useEffect(() => {
    setProfilePhoto(getProfilePhoto(imgID));
  }, [imgID]);

  return (
    <ProfileSectionDiv>
      <div className="mypage-photo-sect">
        <img alt={profilePhoto} src={`${PICTURE_DIR + profilePhoto}`} />
        <MypageButton btnType="change-photo">사진 변경</MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <AuthButton />
          <MypageButton>로그아웃</MypageButton>
        </div>
      </div>
    </ProfileSectionDiv>
  );
};

const ProfileSectionDiv = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-grow: 3;
  flex-shrink: 0;
  min-width: 15rem;
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
      border: 2px solid ${(props) => props.theme.black};
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

export default ProfileSection;
