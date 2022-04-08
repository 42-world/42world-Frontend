import React from "react";
import styled from "styled-components";

import ProfileSection from "./ProfileSection";
import LinkSection from "./LinkSection";

import MypageData from "../../../datas/mypage";

const MyProfile = () => {
  return (
    <MyProfileDiv>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection
          imgRef={MypageData.profilePhoto}
          userName={MypageData.userName}
        />
        <LinkSection links={MypageData.links} />
      </div>
    </MyProfileDiv>
  );
};

const MyProfileDiv = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 100%;
  height: fit-content;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  .profile-title {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  hr {
    color: ${(props) => props.theme.LineGray1};
  }
  .profile-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: calc(100% - 2rem - 0.6rem);
    @media screen and (min-width: 481px) {
      flex-direction: row;
    }
  }
  @media screen and (min-width: 769px) {
    h1 {
      margin: 0.5rem 0.1rem;
      margin-left: 1rem;
      height: 2.4rem;
      font-size: 2rem;
    }
  }
`;

export default MyProfile;
