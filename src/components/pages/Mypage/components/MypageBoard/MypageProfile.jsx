import ProfileSection from '@components/pages/Mypage/components/MypageBoard/ProfileSection';
import { useMypageProfile } from '@components/pages/Mypage/hooks';

import { StyledMypageProfile } from '@components/pages/Mypage/styles';

const MypageProfile = () => {
  const { myLinks, userInfo, linkIcon } = useMypageProfile();

  return (
    <StyledMypageProfile>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection userInfo={userInfo} />
        <ul className="link-section">
          {myLinks.map(({ linkType, linkValue, linkHref }) => (
            <li key={`link-${linkType}`}>
              <a href={linkHref} className="profile-link-box" target="_blank" rel="noreferrer">
                {linkIcon[linkType] ?? <></>}
                <span>{linkValue}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </StyledMypageProfile>
  );
};

export default MypageProfile;
