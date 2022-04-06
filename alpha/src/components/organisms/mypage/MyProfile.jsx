import React from "react";
import styled from "styled-components";

import IconSet from "../../atoms/Mypage";
import MypageData from "../../../datas/mypage";

const MyProfile = () => {
  return (
    <MyProfileDiv>
      <h1>마이페이지</h1>
      <hr />
      <div className="profile-section">
        {/*<ProfileSection />
        <LinkSection />*/}
      </div>
    </MyProfileDiv>
  );
};

const MyProfileDiv = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 0.3rem;
  width: calc(100% - 0.6rem);
  height: 40vh; //PC에서 30vh
  border-radius: ${(props) => props.theme.borderRadius};
  h1 {
    margin: 0.1rem;
  }
`;

export default MyProfile;
