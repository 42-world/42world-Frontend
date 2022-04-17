//import React, { useState } from "react";
import styled from "styled-components";
import { AuthService } from "../../../network";
import { Alert, BtnSeoul, LoginTitle, Title } from "../../atoms/Login";
import { useNavigate } from "react-router-dom";

const Signin = ({ handleSignup, isCallback }) => {
  const navigate = useNavigate();
  const handleLoginButton = async () => {
    window.location.href = AuthService.getAuthUrl();
    navigate("/");
  };

  return (
    <SigninBlock>
      <div className="main">
        <Title>
          <img src="assets/images/logo/Logo@1x.png" alt="" />
          <p>당신이 있기에 행복한 42</p>
        </Title>
        <div className="Box">
          <Alert className="Alert">
            <p>42WORLD 커뮤니티는</p>
            <p>
              42서울인들과{" "}
              <span className="Important">취업자/창업자/알럼나이/카뎃</span>을
            </p>
            <p>아우르느 통합 커뮤니티입니다.</p>
            <p>여러분의 피드백을 받아</p>
            <p>지속적인 업데이트가 이루어 집니다.</p>
          </Alert>
          <LoginTitle className="LoginTitle">로그인하기</LoginTitle>
          <BtnSeoul onClick={handleLoginButton} className="BtnSeoul">
            42Seoul로 로그인
          </BtnSeoul>

          {/* <ForgotPassword>비밀번호를 잊으셨나요?</ForgotPassword> */}
        </div>
        {/* <Box>
            <SignupWrapper>
              계정이 없으신가요? <Link to="/signup">가입하기</Link>
            </SignupWrapper>
          </Box> */}
      </div>
    </SigninBlock>
  );
};

const SigninBlock = styled.div`
  background: url("/images/img-home.jpg") center center/cover no-repeat;
  @media screen and (min-width: 960px) {
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .Alert {
          margin: 20px;
        }
        .LoginTitle {
          margin-top: 30px;
          margin-bottom: 20px;
        }
        .BtnSeoul {
          margin-bottom: 20px;
        }
      }
    }
  }

  @media screen and (max-width: 960px) {
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

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .Alert {
          margin: 20px;
        }
        .LoginTitle {
          margin-top: 30px;
          margin-bottom: 20px;
        }
        .BtnSeoul {
          margin-bottom: 20px;
        }
      }
    }
  }
`;

export default Signin;
