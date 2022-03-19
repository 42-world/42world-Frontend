import React, { useState } from "react";
import styled from "styled-components";
import {
  Link,
  useNavigate,
} from "../../../node_modules/react-router-dom/index";

const Login = () => {
  const navigate = useNavigate();
  const [loginInfo, setLoginInfo] = useState({});
  //const { setIsLogin } = useContext(UserContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo({ ...loginInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const { error, token, msg } = await tryLogin(loginInfo);
    // console.log(error, token, msg);
    // if (!error) {
    //   localStorage.setItem("token", token);
    //   //localStorage.token = token;
    //   //Instance.defaults.headers.common["Authorization"] = token;
    //   axios.defaults.headers.common["Authorization"] = token;
    //   setIsLogin(true);
    //   navigate("/");
    // } else {
    //   localStorage.removeItem("token");
    //   alert(msg);
    // }
  };

  return (
    <LoginBlock>
      <div className="video-container">
        <video
          src="assets/videos/video-4.mp4"
          type="video/mp4"
          loop
          muted
          autoplay
        />
        <Main>
          <div className="title">
            <img src="assets/images/logo/Logo@1x.png" alt="" />
            <p>당신이 있기에 행복한 42</p>
          </div>
          <div className="Box">
            <form className="Loginform" onSubmit={handleSubmit}>
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
            </form>
            <BtnSeoul>42Seoul로 로그인</BtnSeoul>
            {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
          </div>
          {/* <Box>
            <SignupWrapper>
              계정이 없으신가요? <Link to="/signup">가입하기</Link>
            </SignupWrapper>
          </Box> */}
        </Main>
      </div>
    </LoginBlock>
  );
};

export const Main = styled.main`
  display: block;
  justify-content: center;
  align-items: center;
  .title {
    width: 500px;
    padding: 10px 0;
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: white;
    text-align: center;
  }
  .Box {
    width: 500px;
    padding: 10px 0;
    margin-bottom: 10px;
    background: #fff;
    border: 1px solid #dbdbdb;
    text-align: center;
    border-radius: 10px;
    .Loginform {
      margin-top: 24px;
      padding: 0 40px;
      display: flex;
      flex-direction: column;
    }
  }
`;
export const PageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #fafafa;
`;

export const InputText = styled.input`
  padding-left: 8px;
  height: 36px;
  background: #fafafa;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  & + & {
    //인접형제결합자 : InputText(&는 현재 쓰는 성분)
    margin-top: 6px;
  }
`;
export const BtnSubmit = styled.button`
  margin: 8px 0;
  padding: 5px 9px;
  background: #ffc000;
  color: #000;
  border: transparent;
  border-radius: 4px;
  font-weight: bold;
`;

export const SignupWrapper = styled.div`
  padding: 15px 0;
  font-size: 14px;
  a {
    color: #ffc000;
    text-decoration: none;
    font-weight: bold;
  }
`;

export const BtnSeoul = styled.button`
  width: 77%;
  padding: 6px 9px;
  background: #2c2d2d;
  color: #fff;
  border: transparent;
  border-radius: 4px;
  font-weight: bold;
`;

const LoginBlock = styled.div`
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  .video-container {
    /* background: url('/images/img-home.jpg') center center/cover no-repeat; */
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: contain;
  }

  /* .hero-container > h1 {
    color: #fff;
    font-size: 100px;
    margin-top: -100px;
  }

  .hero-container > p {
    margin-top: 8px;
    color: #fff;
    font-size: 32px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif;
  }

  .hero-btns {
    margin-top: 32px;
  }

  .hero-btns .btn {
    margin: 6px;
  }

  .fa-play-circle {
    margin-left: 4px;
  }

  @media screen and (max-width: 960px) {
    .hero-container > h1 {
      font-size: 70px;
      margin-top: -150px;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-container > h1 {
      font-size: 50px;
      margin-top: -100px;
    }

    .hero-container > p {
      font-size: 30px;
    }

    .btn-mobile {
      display: block;
      text-decoration: none;
    }

    .btn {
      width: 100%;
    }
  } */
`;

export default Login;
