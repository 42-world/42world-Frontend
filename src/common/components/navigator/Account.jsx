import { Link } from 'react-router-dom';
import { StyledMenuButton } from 'common/components/navigator/styled';
import styled from 'styled-components';

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

const StyledProfileImage = styled.img`
  border-radius: 50%;
  margin-left: 0.5rem;
`;

const StyledUserName = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  border-radius: 3.5rem;
  background-color: ${({ theme }) => theme.backgroundTheme4};
  transition: all 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;

export default Account;
