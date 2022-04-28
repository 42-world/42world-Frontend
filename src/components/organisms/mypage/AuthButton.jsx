import { useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

import { authState } from "../../../store/auth";
import { MypageButton } from "../../atoms/Mypage";

const AuthButton = () => {
  const navigate = useNavigate();
  const auth = useRecoilValue(authState);

  const handleAuthClick = () => {
    console.log("auth test");
    if (auth.state !== 200) navigate("/mypage/auth");
  };

  return auth.state !== 200 ? (
    <MypageButton btnType="auth-42" onClick={handleAuthClick}>
      42인증
    </MypageButton>
  ) : (
    <MypageButton btnType="auth-42-done">인증완료</MypageButton>
  );
};

export default AuthButton;
