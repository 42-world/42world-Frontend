//import React, { useState } from "react";
import styled from "styled-components";
import { Alert, BtnSeoul, LoginTitle, Title } from "../../atoms/Login";
//import { useNavigate } from "../../../node_modules/react-router-dom/index";

const Signup = () => {
  //const navigate = useNavigate();
  //const [loginInfo, setLoginInfo] = useState({});
  //const { setIsLogin } = useContext(UserContext);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginInfo({ ...loginInfo, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const { error, token, msg } = await tryLogin(loginInfo);
  //   // console.log(error, token, msg);
  //   // if (!error) {
  //   //   localStorage.setItem("token", token);
  //   //   //localStorage.token = token;
  //   //   //Instance.defaults.headers.common["Authorization"] = token;
  //   //   axios.defaults.headers.common["Authorization"] = token;
  //   //   setIsLogin(true);
  //   //   navigate("/");
  //   // } else {
  //   //   localStorage.removeItem("token");
  //   //   alert(msg);
  //   // }
  // };

  return (
    <SignupBlock>
      <div className="main">
        <Title>
          <img src="assets/images/logo/Logo@1x.png" alt="" />
          <p>당신이 있기에 행복한 42</p>
        </Title>
        <div className="Box">
          <LoginTitle>인증하기</LoginTitle>
          <div className="InputBox">
            <input type="text" />
            <span>@student.42seoul.kr</span>
          </div>

          <BtnSeoul>인증메일 전송하기</BtnSeoul>
          <Alert>
            <p>
              <span className="Important">chahan@student.42seoul.kr</span>
            </p>
            <p>으로 인증메일이 전송되었습니다.</p>

            <p>받으신 이메일을 열어 "인증하기" 버튼을</p>
            <p>클릭하면 인증이 완료됩니다.</p>
          </Alert>

          {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
        </div>
        {/* <Box>
            <SignupWrapper>
              계정이 없으신가요? <Link to="/signup">가입하기</Link>
            </SignupWrapper>
          </Box> */}
      </div>
    </SignupBlock>
  );
};

const SignupBlock = styled.div`
  background: url("/images/img-home.jpg") center center/cover no-repeat;
  @media screen and (min-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
      .main {
        display: block;
        justify-content: center;
        align-items: center;

        .Box {
          width: 500px;
          padding: 10px 0;
          margin-bottom: 10px;
          background: var(--primary-white);
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
      }
    }
  }

  @media screen and (max-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
      .main {
        position: relative;
        width: 370px;
        justify-content: center;
        align-items: center;

        .Box {
          width: 100%;
          padding: 10px 4px;
          margin-bottom: 10px;
          background: var(--primary-white);
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
      }
    }
  }
`;

export default Signup;
