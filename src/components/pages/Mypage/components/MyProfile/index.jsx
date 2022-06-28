import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from 'store/user';
import ProfileSection from './ProfileSection';
import LinkBox from '../LinkBox';
import { StyledMyProfile } from '../../styles';

const MyProfile = () => {
  const [myLinks, setMyLinks] = useState([]);
  const user = useRecoilValue(userState);
  console.log(user);

  useEffect(() => {
    setMyLinks([
      { linkType: 'intra42', linkValue: user?.nickname },
      { linkType: 'github', linkValue: user?.nickname },
    ]);
  });
  return (
    <StyledMyProfile>
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
    </StyledMyProfile>
  );
};

export default MyProfile;
