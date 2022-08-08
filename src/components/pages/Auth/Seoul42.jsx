import { useEffect, useMemo, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { LoadingButton } from '@mui/lab';

import { FtAuthService } from '@network';

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
  const [isSend, setIsSend] = useState(false);
  const [isBlock, setIsBlock] = useState(false);
  const [isError, setIsError] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState({
    text: '',
  });
  const [input, setInput] = useState({
    email: '',
  });
  const [authInfo, setAuthInfo] = useState({
    email: '',
  });

  const onChange = e => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };
  const handleAuthenticate = () => {
    if (input.email === '' || !checkIntraId(input.email)) {
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
      email: '',
    });
  };

  const handleMessage = () => {
    let intervalId = setInterval(() => {
      setLoadingMessage(prevState => ({ text: prevState.text + '.' }));
    }, 1000);
    setTimeout(() => {
      clearInterval(intervalId);
    }, 3000);
  };

  const errorMessage = useMemo(() => {
    if (input.email === '') return '아이디를 입력하세요';
    else return '영어/숫자/특수문자만 가능합니다';
  }, [input.email]);

  useEffect(() => {
    if (isBlock) handleMessage();
    else {
      setLoadingMessage({ text: '메일 전송 중' });
    }
  }, [isBlock]);

  return (
    <Seoul42Block>
      <div className="main">
        <StyledLogo src="assets/images/logo/Logo@1x.png" alt="Logo" />
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
              autocomplete="off"
            />
            <span>@student.42seoul.kr</span>
          </div>

          <LoadingButton
            className="SendButton"
            onClick={handleAuthenticate}
            loading={isBlock}
            loadingIndicator={loadingMessage.text}
            loadingPosition={'center'}
            variant="contained"
            disabled={isBlock}
          >
            {isBlock ? '' : '인증메일 전송하기'}
          </LoadingButton>

          {isSend && <AuthRequestInformation intraId={authInfo.email} />}
          {isSend && <AuthRequestCheckStep handleSendReset={handleSendReset} />}
        </div>
      </div>
    </Seoul42Block>
  );
};

const StyledLogo = styled.img`
  width: 15rem;
  margin-bottom: 1rem;
`;

const ErrorSpan = styled.span`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  color: #f00;
  ${props => {
    if (!props.isError)
      return `
      opacity: 0;
      transition: transform 300ms ease-in-out 0ms, opacity 500ms;
      `;
    else
      return `
      opacity: 1;
      transition: transform 200ms ease-in-out 0ms, opacity 500ms;
      transform: translateY(5px);
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

const LoginTitle = styled.span`
  display: block;
  font-weight: bold;
  @media screen and (min-width: 960px) {
    font-size: 24px;
  }

  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
`;

const Seoul42Block = styled.div`
  background: url('/images/img-home.jpg') center center/cover no-repeat;
  .main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .Box {
      padding: 2rem;
      margin-bottom: 10px;
      background: ${props => props.theme.white};
      text-align: center;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .LoginTitle {
        display: block;
        margin-bottom: 1rem;
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

        .MuiLoadingButton-loadingIndicator {
          position: relative;
          color: ${props => props.theme.white};
          left: 0;
          transform: translateY(0);
        }
      }
      .send_info {
        display: flex;
        flex-direction: column;
        div {
          margin-top: 2rem;
          h2 {
            font-size: 1.2rem;
            color: ${props => props.theme.primary};
            font-weight: 700;
          }
          h3 {
            font-size: 1rem;
            color: ${props => props.theme.textGray3};
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
          color: ${props => props.theme.textGray3};
          font-weight: 400;
          &:first-child {
            margin-bottom: 1.5rem;
          }
          margin-bottom: 0.6rem;
        }

        button {
          margin-top: 1rem;
          width: max-content;
          color: ${props => props.theme.backgroundBlack};
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
  ${props => props.theme.mobileSize} {
    .main {
      .Box {
        padding: 2rem 1rem;
      }
    }
  }
`;

export default Seoul42;
