import { React, useEffect } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";

import ProfileSection from "./ProfileSection";
import LinkSection from "./LinkSection";
import { userState } from "../../../store/user";

//import { UserService } from "../../../network";

const MyProfile = () => {
  //const [myInfo, setMyInfo] = useState(null);
  const myInfo = useRecoilValue(userState);

  useEffect(() => {
    /*
    const fetchMyInfo = async () => {
      const response = await UserService.getUser();
      setMyInfo(response.data);
    };

    fetchMyInfo();
    */
  }, [myInfo]);

  return (
    <MyProfileDiv>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection
          imgID={myInfo[0]?.character}
          userName={myInfo[0]?.nickname}
        />
        <LinkSection MyInfo={myInfo[0]} />
        {/* MypageData에 아직 링크 구현 안됨 */}
      </div>
    </MyProfileDiv>
  );
};

const MyProfileDiv = styled.div`
  background-color: ${(props) => props.theme.white};
  box-shadow: ${(props) => props.theme.boxShadow};
  width: 100%;
  height: fit-content;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${(props) => props.theme.borderRadius};
  .profile-title {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  h1 {
    margin: 0.5rem 0.1rem;
    margin-left: 1rem;
    height: 2.4rem;
    font-size: 2rem;
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
  ${(props) => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${(props) => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default MyProfile;
