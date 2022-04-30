import { LoadingButton } from "@mui/lab";
import { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import styled, { keyframes } from "styled-components";
import { FtAuthService } from "../../../network";
import { userState } from "../../../store/user";
import { LoginTitle, Title } from "../../atoms/Login";

const AuthRequestInformation = ({ intraId }) => {
  return (
    <div className="send_info">
      <div>
        <h2>{intraId}@student.42seoul.kr</h2>
        <h3>으로 인증메일이 전송되었습니다.</h3>
      </div>
      <div>
        <h3>받으신 이메일을 열어 ‘인증하기’ </h3>
        <h3>버튼을 클릭하면 인증이 완료됩니다.</h3>
      </div>
    </div>
  );
};

const AuthRequestCheckStep = ({ handleSendReset }) => {
  return (
    <div className="error_info">
      <h4>혹시 메일을 받지 못하셨나요?</h4>
      <h4>1. 전송에 최대 5분이 소요될 수 있습니다.</h4>
      <h4>2. 스팸편지함을 확인해주세요.</h4>
      <h4>3. 인트라 아이디에 오타가 없는지 확인해주세요.</h4>
      <button onClick={handleSendReset}>인트라 아이디 다시 입력하기</button>
    </div>
  );
};

function checkIntraId(str) {
  const regExp = /[A-Za-z0-9-]/g;
  if (regExp.test(str)) {
    return true;
  } else {
    return false;
  }
}

const Seoul42 = () => {
  const navigate = useNavigate();
  const user = useRecoilValue(userState);
  const [isSend, setIsSend] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState({
    text: "",
  });
  const [input, setInput] = useState({
    email: "",
  });
  const [authInfo, setAuthInfo] = useState({
    email: "",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleAuthenticate = () => {
    if (input.email === "" || !checkIntraId(input.email)) {
      setIsError(true);
      setTimeout(() => {
        setIsError(false);
      }, 1000);
      return;
    }

    FtAuthService.createFtAuth(input.email);
    setIsBlock(true);
    setIsSend(true);
    setAuthInfo({
      email: input.email,
    });
  };

  const handleSendReset = () => {
    setIsBlock(false);
    setIsSend(false);
    setInput({
      email: "",
    });
  };

  const handleMessage = () => {
    let intervalId = setInterval(() => {
      setLoadingMessage((prevState) => ({ text: prevState.text + "." }));
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  };

  const errorMessage = useMemo(() => {
    if (input.email === "") return "아이디를 입력하세요";
    else return "영어/숫자/특수문자만 가능합니다";
  }, [input.email]);

  useEffect(() => {
    if (isBlock) handleMessage();
    else {
      setLoadingMessage({ text: "메일 전송 중" });
    }
  }, [isBlock]);

  useEffect(() => {
    if (user[0] === null || user[0].role !== "NOVICE") navigate("/");
  }, [user, navigate]);

  return (
    <Seoul42Block>
      <div className="main">
        <Title>
          <img src="assets/images/logo/Logo@1x.png" alt="" />
          <p>당신이 있기에 행복한 42</p>
        </Title>
        <div className="Box">
          <LoginTitle className="LoginTitle">인증하기</LoginTitle>
          <ErrorSpan isError={isError}>{errorMessage}</ErrorSpan>
          <div className="InputBox">
            <input
              type="text"
              className="Input"
              placeholder="42서울 계정"
              value={input.email}
              name="email"
              error={isError}
              label="Intra ID"
              variant="outlined"
              onChange={onChange}
            />
            <span>@student.42seoul.kr</span>
          </div>

          <LoadingButton
            className="SendButton"
            onClick={handleAuthenticate}
            loading={isBlock}
            loadingIndicator={loadingMessage.text}
            variant="contained"
            disabled={isBlock}
          >
            인증메일 전송하기
          </LoadingButton>

          {isSend && <AuthRequestInformation intraId={authInfo.email} />}
          {isSend && <AuthRequestCheckStep handleSendReset={handleSendReset} />}
        </div>
      </div>
    </Seoul42Block>
  );
};

const ErrorSpan = styled.span`
  margin-bottom: 2rem;
  font-size: 1rem;
  color: #f00;
  transform: translateY(25px);
  ${(props) => {
    if (!props.isError)
      return `
      opacity: 0;
      transition: transform 300ms ease-in-out 0ms, opacity 500ms;
      `;
    else
      return `
      opacity: 1;
      transition: transform 200ms ease-in-out 0ms, opacity 500ms;
      transform: translateY(30px);
      `;
  }};
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
`;

const Seoul42Block = styled.div`
  background: url("/images/img-home.jpg") center center/cover no-repeat;
  @media screen and (min-width: 768px) {
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
          margin-top: 2rem;
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
        .SendButton {
          width: 77%;
          padding: 12px 9px;
          background: #2a2d38;
          color: #fff;
          border: 1px solid #d8d8d8;
          box-sizing: border-box;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
        }
        .send_info {
          display: flex;
          flex-direction: column;
          div {
            margin-top: 2rem;
            h2 {
              font-size: 1.2rem;
              color: ${(props) => props.theme.primary};
              font-weight: 700;
            }
            h3 {
              font-size: 1rem;
              color: ${(props) => props.theme.textGray3};
              font-weight: 400;
              margin-bottom: 0.5rem;
            }
          }

          animation: ${fadeIn} 500ms ease-out 0ms;
        }
        .error_info {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
          padding: 1rem 0;
          align-items: center;

          h4 {
            font-size: 0.8rem;
            color: ${(props) => props.theme.textGray3};
            font-weight: 400;
            &:first-child {
              margin-bottom: 1.5rem;
            }
            margin-bottom: 0.6rem;
          }

          button {
            margin-top: 1rem;
            width: max-content;
            color: ${(props) => props.theme.backgroundBlack};
            text-decoration: underline;
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
          }
          animation: ${fadeIn} 500ms ease-out 1000ms;
          animation-fill-mode: backwards;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
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
          margin-top: 2rem;
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
        .SendButton {
          width: 77%;
          padding: 12px 9px;

          background: #2a2d38;
          color: #fff;
          border: 1px solid #d8d8d8;
          box-sizing: border-box;
          border-radius: 5px;
          font-weight: bold;
          cursor: pointer;
          font-size: 16px;
        }
        .send_info {
          display: flex;
          flex-direction: column;
          div {
            margin-top: 2rem;
            h2 {
              font-size: 1.2rem;
              color: ${(props) => props.theme.primary};
              font-weight: 700;
            }
            h3 {
              font-size: 1rem;
              color: ${(props) => props.theme.textGray3};
              font-weight: 400;
              margin-bottom: 0.5rem;
            }
          }

          animation: ${fadeIn} 500ms ease-out 0ms;
        }
        .error_info {
          display: flex;
          flex-direction: column;
          margin-top: 3rem;
          padding: 1rem 0;
          align-items: center;

          h4 {
            font-size: 0.8rem;
            color: ${(props) => props.theme.textGray3};
            font-weight: 400;
            &:first-child {
              margin-bottom: 1.5rem;
            }
            margin-bottom: 0.6rem;
          }

          button {
            margin-top: 1rem;
            width: max-content;
            color: ${(props) => props.theme.backgroundBlack};
            text-decoration: underline;
            border: none;
            background: none;
            outline: none;
            cursor: pointer;
          }
          animation: ${fadeIn} 500ms ease-out 1000ms;
          animation-fill-mode: backwards;
        }
      }
    }
  }
`;

export default Seoul42;
