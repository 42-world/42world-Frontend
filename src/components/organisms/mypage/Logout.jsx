import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../network";
import { useSetRecoilState } from "recoil";
import { userState } from "../../../store/user";

const Logout = () => {
  const setUser = useSetRecoilState(userState);
  const navi = useNavigate();
  const handleSignOut = async () => {
    setUser([]);
    await AuthService.signOut();

    navi("/login");
  };
  return <div onClick={handleSignOut}>로그아웃</div>;
};

export default Logout;
