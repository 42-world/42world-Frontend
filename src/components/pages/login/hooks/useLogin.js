import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import qs from 'qs';
import { useSetRecoilState } from 'recoil';

import { AuthService, UserService } from 'network';
import { userState } from 'store/user';

const LOGIN_ERROR_MESSAGE = '로그인 실패하였습니다. 다시 시도해주세요';

const useLogin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const setUser = useSetRecoilState(userState);

  const onClickButton = () => {
    try {
      const redirectUrl = AuthService.getAuthUrl();
      window.location.href = redirectUrl;
    } catch (e) {
      alert(e);
    }
  };

  const isLoggedIn = () => {
    return pathname.match(/\/auth*/);
  };

  const getCode = () => {
    const { code } = qs.parse(window.location.search, {
      ignoreQueryPrefix: true,
    });

    return code;
  };

  const getAccessToken = async code => {
    const res = await AuthService.getAuthAccessToken(code);
    if (res.status == 200) {
      // TODO: refoctoring set user by react query
      // TODO: merging get user api in backend
      const user = await UserService.getNoviceProfile();
      setUser(user);
      navigate('/');
    } else {
      throw new Error(LOGIN_ERROR_MESSAGE);
    }
  };

  useEffect(() => {
    (async () => {
      if (isLoggedIn()) {
        try {
          const code = getCode();

          if (code) {
            await getAccessToken(code);
          }
        } catch (e) {
          // TODO: need to change alert to modal
          window.alert(e.message);
          window.location.href = '/login';
        }
      }
    })(),
      [];
  });

  return { onClickButton };
};

export default useLogin;
