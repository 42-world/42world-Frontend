import { Link } from 'react-router-dom';
import { StyledUserName } from '../styled';

const LoginButton = () => {
  return (
    <Link to="/login">
      <StyledUserName>로그인</StyledUserName>
    </Link>
  );
};

export default LoginButton;
