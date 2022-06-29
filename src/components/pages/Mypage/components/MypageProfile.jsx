import LinkBox from 'components/pages/Mypage/components/LinkBox';
import ProfileSection from 'components/pages/Mypage/components/ProfileSection';

import { useMypageProfile } from 'components/pages/Mypage/hooks';

import { StyledMypageProfile } from 'components/pages/Mypage/styles';

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
