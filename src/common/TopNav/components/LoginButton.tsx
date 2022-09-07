import { Link } from 'react-router-dom';
import { StyledUserName } from '../styled';

const LoginButton = () => {
  return (
    <Link to="/login">
      <StyledUserName>
        <div className="login-div">로그인</div>
      </StyledUserName>
    </Link>
  );
};

export default LoginButton;
