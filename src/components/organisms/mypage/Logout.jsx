import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { AuthService } from '../../../network';
import { userState } from '../../../store/user';

const Logout = () => {
  const setUser = useSetRecoilState(userState);
  const navi = useNavigate();
  const handleSignOut = async () => {
    setUser(null);
    await AuthService.signOut();

    navi('/');
  };
  return <div onClick={handleSignOut}>로그아웃</div>;
};

export default Logout;
