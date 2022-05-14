import { useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from '../../../store/user';
// import { authState } from "../../../store/auth";
import { MypageButton } from '../../atoms/Mypage';

const AuthButton = () => {
  const navigate = useNavigate();
  //const auth = useRecoilValue(authState);
  const user = useRecoilValue(userState);

  const handleAuthClick = () => {
    console.log('auth test');
    if (user.role === 'NOVICE') navigate('/auth');
    //if (auth.state !== 200) navigate("/mypage/auth");
  };

  return user.role === 'NOVICE' ? (
    <MypageButton btnType="auth-42" onClick={handleAuthClick}>
      42인증
    </MypageButton>
  ) : (
    <MypageButton btnType="auth-42-done">인증완료</MypageButton>
  );
};

export default AuthButton;
