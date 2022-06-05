import { Link } from 'react-router-dom';
import { StyledProfileImage, StyledUserName } from '../styled';

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

export default UserName;
