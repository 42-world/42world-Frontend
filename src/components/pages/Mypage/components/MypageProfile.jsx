import { useMypageProfile } from '../hooks';
import LinkBox from './LinkBox';
import ProfileSection from './ProfileSection';

import { StyledMypageProfile } from '../styles';

const MypageProfile = () => {
  const { myLinks, userInfo, setUserInfo } = useMypageProfile();

  return (
    <StyledMypageProfile>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection userInfo={userInfo} setUserInfo={setUserInfo} />
        <ul className="link-section">
          {myLinks.map(linkInfo => (
            <LinkBox key={`link-${linkInfo.linkType}`} linkInfo={linkInfo} />
          ))}
        </ul>
        {/* TODO: MypageData에 아직 링크 구현 안됨 */}
      </div>
    </StyledMypageProfile>
  );
};

export default MypageProfile;
