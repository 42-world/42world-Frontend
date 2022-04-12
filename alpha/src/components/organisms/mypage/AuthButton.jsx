import { useNavigate } from "react-router-dom";
import { MypageButton } from "../../atoms/Mypage";

const AuthButton = () => {
  const navigate = useNavigate();
  //const auth = useContext(AuthContext);

  const handleAuthClick = () => {
    //if (auth.state !== 200) navigate('/profile/auth');
    console.log("auth test");
  };

  return (
    /* auth.state !== 200 ?
		<MypageButton btnType="auth-42" onClick={handleAuthClick}>42인증</MypageButton> :
          <MypageButton btnType="auth-42-done">인증완료</MypageButton>
		  */
    <MypageButton btnType="auth-42-done">인증완료</MypageButton>
  );
};

export default AuthButton;
