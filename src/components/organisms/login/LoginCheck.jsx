import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { UserService } from '../../../network';
import { userState } from '../../../store/user';

const LoginCheck = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (!user) {
      (async () => {
        try {
          const { data } = await UserService.getUser();
          setUser(data);
        } catch (e) {
          setUser(null);
        }
      })();
    }
  }, [user, navigate]);

  if (!user) return <></>;
  else {
    return <Outlet />;
  }
};

export default LoginCheck;
