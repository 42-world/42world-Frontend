import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ErrorPage = () => {
  const navi = useNavigate();

  return (
    <ErrorBackground>
      <img
        id="logo"
        src="/assets/error.png"
        style={{ width: '300px' }}
        alt="에러"
      />
      <ErrorBox>
        <div>
          <h1>404</h1>
          <h2>Page Not Found</h2>
        </div>
        <div>
          <h3>요청하신 페이지가 존재하지 않습니다.</h3>
          <h3>아래 로고를 눌러 홈으로 돌아가 주세요.</h3>
        </div>
      </ErrorBox>
      <img
        id="button"
        src="/assets/42mainlogo.png"
        style={{ width: '100px' }}
        onClick={() => navi('/')}
        alt="42로고"
      />
    </ErrorBackground>
  );
};

const ErrorBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background: #2a2d38;
  #logo {
    z-index: 0;
    position: fixed;
    top: 20%;
    left: 50%;
    transform: translateX(-50%);
  }
  #button {
    position: fixed;
    bottom: 10%;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const ErrorBox = styled.div`
  position: absolute;
  left: 50%;
  top: 60%;
  transform: translateX(-50%) translateY(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 70px;
  h1 {
    z-index: 1;
    font-size: 6rem;
  }
  h1,
  h2 {
    position: relative;
    text-align: center;
    color: #ffffff;
  }
  h3 {
    color: #aaaaaa;
    font-size: 0.8rem;
    font-weight: 300;
  }
`;

export default ErrorPage;
