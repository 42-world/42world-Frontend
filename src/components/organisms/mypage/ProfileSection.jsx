import { useEffect, useState } from "react";
import styled from "styled-components";

import { MypageButton } from "../../atoms/Mypage";
import AuthButton from "./AuthButton";
import Logout from "./Logout";
import profileUtils from "./utils/profileUtils";
import CharSelectModal from "./CharSelectModal";

const ProfileSection = ({ imgID, userName }) => {
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setProfilePhoto(profileUtils.getProfilePhoto(imgID));
  }, [imgID]);

  const handleClickPhotoBtn = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  return (
    <ProfileSectionDiv>
      <div className="mypage-photo-sect">
        <img alt={profilePhoto} src={`${PICTURE_DIR + profilePhoto}`} />
        <MypageButton
          btnType="change-photo"
          onClick={(e) => handleClickPhotoBtn(e)}>
          사진 변경
        </MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <AuthButton />
          <MypageButton>
            <Logout>로그아웃</Logout>
          </MypageButton>
        </div>
      </div>
      <CharSelectModal isOpen={isOpen} setIsOpen={setIsOpen} />
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
