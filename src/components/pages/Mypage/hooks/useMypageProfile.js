import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { userState } from 'store/user';
import {
  IconGithub,
  Icon42,
  IconFacebook,
  IconLinkedin,
  IconSolvedac,
  IconTwitter,
} from 'components/pages/Mypage/assets';

const INIT_USER = {
  id: -1,
  nickname: 'undefined',
  role: 'CADET',
  character: 0,
  createdAt: '1900-01-01T00:00:00.000Z',
  updatedAt: '1900-01-01T00:00:00.000Z',
};

const useMypageProfile = () => {
  const [myLinks, setMyLinks] = useState([]);
  const userInfo = useRecoilValue(userState) ?? INIT_USER;
  const setUserInfo = useSetRecoilState(userState);

  const linkIcon = {
    github: <IconGithub />,
    intra42: <Icon42 />,
    linkedin: <IconLinkedin />,
    facebook: <IconFacebook />,
    twitter: <IconTwitter />,
    solvedac: <IconSolvedac />,
  };

  const linkHref = {
    github: 'https://github.com/',
    intra42: 'https://profile.intra.42.fr/',
    linkedin: 'https://kr.linkedin.com/',
    facebook: 'https://facebook.com/',
    twitter: 'https://twitter.com/',
    solvedac: 'https://solved.ac/profile/',
  };

  useEffect(() => {
    setMyLinks([
      { linkType: 'intra42', linkValue: userInfo.nickname ?? 'undefined' },
      { linkType: 'github', linkValue: userInfo.nickname ?? 'undefined' },
    ]);
  }, [userInfo]);

  const handleLinkBoxClick = linkType => {
    console.log(linkHref[linkType]); // TODO: 링크 누르면 이동하도록 수정
  };

  return { myLinks, userInfo, setUserInfo, linkIcon, handleLinkBoxClick };
};

export default useMypageProfile;
