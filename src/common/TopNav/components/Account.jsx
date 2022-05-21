import { Link } from 'react-router-dom';
import { StyledUserName, StyledProfileImage, StyledMenuButton } from '../styled';

const Account = ({ user }) => {
  return (
    <StyledMenuButton>
      {user ? <UserName user={user} /> : <LoginButton />}
    </StyledMenuButton>
  );
};

const UserName = ({ user }) => {
  return (
    <Link to="/mypage">
      <StyledUserName>
        <div>{user.nickname}</div>
        <StyledProfileImage
          // TODO : 사진 변경
          src="/assets/CharacterWhiteBG/babybbo.png"
          alt="사용자 캐릭터"
          width="50px"
          height="50px"
        />
      </StyledUserName>
    </Link>
  );
};

const LoginButton = () => {
  return (
    <Link to="/login">
      <StyledUserName>로그인</StyledUserName>
    </Link>
  );
};

export default Account;
