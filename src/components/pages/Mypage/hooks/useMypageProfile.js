import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { userState } from 'store/user';

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

  useEffect(() => {
    setMyLinks([
      { linkType: 'intra42', linkValue: userInfo.nickname ?? 'undefined' },
      { linkType: 'github', linkValue: userInfo.nickname ?? 'undefined' },
    ]);
  }, [userInfo]);

  return { myLinks, userInfo, setUserInfo };
};

export default useMypageProfile;
