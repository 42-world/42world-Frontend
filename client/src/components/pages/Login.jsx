import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { tryLogin } from "../../apis/user";
import {
  Box,
  BtnSubmit,
  Form,
  InputText,
  Logo,
  PageWrapper,
  SignupWrapper,
  Main,
  BtnSeoul,
} from "../atoms/login";
import { Instance } from "../../apis/index.js";
import UserContext from "../../contexts/user.js";
import logo from "../../assets/logo/logo.png";
import axios from "../../../node_modules/axios/index";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  const { setIsLogin } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, token, msg } = await tryLogin(loginInfo);
    console.log(error, token, msg);
    if (!error) {
      localStorage.setItem("token", token);
      //localStorage.token = token;
      //Instance.defaults.headers.common["Authorization"] = token;
      axios.defaults.headers.common["Authorization"] = token;
      setIsLogin(true);
      navigate("/");
    } else {
      localStorage.removeItem("token");
      alert(msg);
    }
  };

  return (
    <PageWrapper>
      <Main>
        <Box>
          <Logo src={logo} />
          <Form onSubmit={handleSubmit}>
            <InputText
              name="email"
              placeholder="이메일"
              value={loginInfo.email}
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              value={loginInfo.password}
              onChange={handleChange}
            />
            <BtnSubmit>로그인</BtnSubmit>
          </Form>
          <BtnSeoul>42Seoul로 로그인</BtnSeoul>
          {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
        </Box>
        <Box>
          <SignupWrapper>
            계정이 없으신가요? <Link to="/signup">가입하기</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const FBLogin = styled.div`
  margin: 10px 40px 18px;
  font-size: 14px;
  color: #ffc000;
  font-weight: bold;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
`;

export default Login;
