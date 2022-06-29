import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from 'store/user';
import LinkBox from './LinkBox';
import ProfileSection from './ProfileSection';

import { StyledMypageProfile } from '../styles';

const MypageProfile = () => {
  const [myLinks, setMyLinks] = useState([]);
  const user = useRecoilValue(userState);

  useEffect(() => {
    setMyLinks([
      { linkType: 'intra42', linkValue: user?.nickname },
      { linkType: 'github', linkValue: user?.nickname },
    ]);
  }, [user]);

  return (
    <StyledMypageProfile>
      <h1 className="profile-title">마이페이지</h1>
      <hr />
      <div className="profile-section">
        <ProfileSection imgID={user?.character} userName={user?.nickname} />
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
