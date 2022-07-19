import { useEffect, useState } from 'react';

import { useGetUser } from '@common/hooks/api/user';
import {
  IconGithub,
  Icon42,
  IconFacebook,
  IconLinkedin,
  IconSolvedac,
  IconTwitter,
} from '@components/pages/Mypage/assets';

const useMypageProfile = () => {
  const [myLinks, setMyLinks] = useState([]);
  const { user: userInfo } = useGetUser();

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

  const handleClickLinkBox = linkType => {
    console.log(linkHref[linkType]); // TODO: 링크 누르면 이동하도록 수정
  };

  useEffect(() => {
    if (userInfo.nickname) {
      setMyLinks([
        { linkType: 'intra42', linkValue: userInfo.nickname },
        { linkType: 'github', linkValue: userInfo.nickname },
      ]);
    }
  }, [userInfo]);

  return { myLinks, userInfo, linkIcon, handleClickLinkBox };
};

export default useMypageProfile;
