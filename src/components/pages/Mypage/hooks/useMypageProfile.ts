import { useEffect, useState } from 'react';

import { useGetUser } from '@common/hooks/api/user';
import { IMypageLink } from '@components/pages/Mypage/types';

const useMypageProfile = () => {
  const [myLinks, setMyLinks] = useState([] as IMypageLink[]);
  const { user: userInfo } = useGetUser();

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
        {
          linkType: 'intra42',
          linkValue: userInfo.nickname,
          linkHref: linkBaseURL['intra42'] + userInfo.nickname,
        },
        {
          linkType: 'github',
          linkValue: userInfo.githubUsername,
          linkHref: linkBaseURL['github'] + userInfo.githubUsername,
        },
      ]);
    }
  }, [userInfo]);

  return { myLinks, userInfo };
};

export default useMypageProfile;
