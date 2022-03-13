import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { addUser } from "../../apis/user";
import {
  Box,
  BtnSeoul,
  BtnSubmit,
  Form,
  InputText,
  Logo,
  Main,
  PageWrapper,
  SignupWrapper,
} from "../atoms/login";
import logo from "../../assets/logo/logo.png";

const Signup = () => {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { password, passwordConfirm } = userInfo;
    if (password !== passwordConfirm) return alert("비밀번호가 같지 않습니다");
    if (password.length < 4) return alert("비밀번호가 너무 짧습니다");
    const { success, msg } = await addUser(userInfo);
    if (success) {
      // 회원가입 성공
      alert("회원가입 성공");
      navigate("/login");
    } else {
      // 회원가입 실패
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
              name="nickname"
              placeholder="닉네임"
              value={userInfo.nickname}
              onChange={handleChange}
            />
            <InputText
              name="email"
              placeholder="이메일"
              value={userInfo.email}
              onChange={handleChange}
            />
            <InputText
              name="password"
              placeholder="비밀번호"
              type="password"
              value={userInfo.password}
              onChange={handleChange}
            />
            <InputText
              name="passwordConfirm"
              placeholder="비밀번호 확인"
              type="password"
              value={userInfo.passwordConfirm}
              onChange={handleChange}
            />
            <InputText
              name="company"
              placeholder="회사"
              value={userInfo.company}
              onChange={handleChange}
            />
            <BtnSubmit>가입</BtnSubmit>
          </Form>
          <BtnSeoul>42Seoul로 로그인</BtnSeoul>
        </Box>
        <Box>
          <SignupWrapper>
            계정이 있으신가요? <Link to="/login">로그인</Link>
          </SignupWrapper>
        </Box>
      </Main>
    </PageWrapper>
  );
};

const FBLogin = styled.div`
  margin: 10px 40px 18px;
  font-size: 14px;
  color: #385185;
  font-weight: bold;
`;
const ForgotPassword = styled.div`
  font-size: 12px;
`;

export default Signup;
