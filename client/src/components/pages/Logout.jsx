import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Instance } from "../../apis/index";
import UserContext from "../../contexts/user";

const Logout = () => {
  // 1. localStorage의 토큰 지우기
  // 2. axios instance의 default header 지우기
  // 3. UserContext의 isLogin false로 만들기
  // 4. 로그인 페이지로 보내기
  const { setIsLogin } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem("token");
    delete Instance.defaults.headers.common["Authorization"];
    setIsLogin(false);
    navigate("/login");
  }, [setIsLogin, navigate]);

  return <>logout</>;
};

export default Logout;
