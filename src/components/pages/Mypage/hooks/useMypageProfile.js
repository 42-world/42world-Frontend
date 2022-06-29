import { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';

import { userState } from 'store/user';

const INIT_USER = {
  id: -1,
  nickname: 'undefined',
  role: 'CADET',
  character: 1,
  createdAt: '1900-01-01T00:00:00.000Z',
  updatedAt: '1900-01-01T00:00:00.000Z',
};

const useMypageProfile = () => {
  const [myLinks, setMyLinks] = useState([]);
  const user = useRecoilValue(userState) ?? INIT_USER;

  useEffect(() => {
    setMyLinks([
      { linkType: 'intra42', linkValue: user.nickname ?? 'undefined' },
      { linkType: 'github', linkValue: user.nickname ?? 'undefined' },
    ]);
  }, [user]);

  return { myLinks, user };
};

export default useMypageProfile;
