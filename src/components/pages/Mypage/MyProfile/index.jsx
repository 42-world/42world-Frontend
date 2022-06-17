import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { userState } from 'store/user';
import LinkSection from './LinkSection';
import ProfileSection from './ProfileSection';

const MyProfile = () => {
  const user = useRecoilValue(userState);
  console.log(user)
  return (
    <MyProfileDiv>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection
          imgID={user?.character}
          userName={user?.nickname}
        />
        <LinkSection MyInfo={user} />
        {/* MypageData에 아직 링크 구현 안됨 */}
      </div>
    </MyProfileDiv>
  );
};

const MyProfileDiv = styled.div`
  background-color: ${props => props.theme.white};
  box-shadow: ${props => props.theme.boxShadow};
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${props => props.theme.borderRadius};
  .profile-title {
    margin: 1rem 0.8rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
  hr {
    border: 0;
    height: 1px;
    background-color: ${props => props.theme.lineGray1};
  }
  .profile-section {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (min-width: 481px) {
      flex-direction: row;
    }
  }
  ${props => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default MyProfile;
