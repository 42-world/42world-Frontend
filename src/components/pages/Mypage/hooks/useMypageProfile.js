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

  useEffect(() => {
    const linkBaseURL = {
      github: 'https://github.com/',
      intra42: 'https://profile.intra.42.fr/users/',
      linkedin: 'https://kr.linkedin.com/',
      facebook: 'https://facebook.com/',
      twitter: 'https://twitter.com/',
      solvedac: 'https://solved.ac/profile/',
    };

    if (userInfo.nickname) {
      setMyLinks([
        { linkType: 'intra42', linkValue: userInfo.nickname, linkHref: linkBaseURL['intra42'] + userInfo.nickname },
        {
          linkType: 'github',
          linkValue: userInfo.githubUsername,
          linkHref: linkBaseURL['github'] + userInfo.githubUsername,
        },
      ]);
    }
  }, [userInfo]);

  return { myLinks, userInfo, linkIcon };
};

export default useMypageProfile;
