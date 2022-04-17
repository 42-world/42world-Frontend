import styled from "styled-components";
import { Alert, BtnSeoul, LoginTitle, Title } from "../../atoms/Login";

const Signup = () => {
  return (
    <SignupBlock>
      <div className="main">
        <Title>
          <img src="assets/images/logo/Logo@1x.png" alt="" />
          <p>당신이 있기에 행복한 42</p>
        </Title>
        <div className="Box">
          <LoginTitle className="LoginTitle">인증하기</LoginTitle>
          <div className="InputBox">
            <input type="text" className="Input" placeholder="42서울 계정" />
            <span>@student.42seoul.kr</span>
          </div>

          <BtnSeoul>인증메일 전송하기</BtnSeoul>
          <Alert className="Alert">
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
        .LoginTitle {
          display: block;
          margin: 30px;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .InputBox {
          margin-bottom: 8px;
          padding: 5px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 77%;
          .Input {
            width: 80%;
            background: white;
            outline: none;
            border-radius: 5px;
            border: 1px #dee2e6 solid;
            padding: 0.5rem 0.7rem;
            margin-right: 5px;
            font-size: 1.125rem;
            line-height: 1.5;
            color: black;
            &::placeholder {
              color: #dee2e6;
            }
            // 버튼을 제외한 영역을 모두 차지하기
          }
          span {
            font-size: 1.125rem;
            font-weight: bold;
          }
        }
        .Alert {
          margin: 20px;
        }

        .Loginform {
          margin-top: 24px;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
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
        .LoginTitle {
          display: block;
          margin: 30px;
          font-size: 1.8rem;
          font-weight: bold;
        }

        .InputBox {
          margin-bottom: 8px;
          padding: 5px 0;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 77%;
          .Input {
            width: 80%;
            background: white;
            outline: none;
            border-radius: 5px;
            border: 1px #dee2e6 solid;
            padding: 0.5rem 0.7rem;
            margin-right: 5px;
            font-size: 0.8rem;
            line-height: 1.5;
            color: black;
            &::placeholder {
              color: #dee2e6;
            }
            // 버튼을 제외한 영역을 모두 차지하기
          }
          span {
            font-size: 0.8rem;
            font-weight: bold;
          }
        }
        .Alert {
          margin: 15px;
        }

        .Loginform {
          margin-top: 24px;
          padding: 0 40px;
          display: flex;
          flex-direction: column;
        }
      }
    }
  }
`;

export default Signup;
