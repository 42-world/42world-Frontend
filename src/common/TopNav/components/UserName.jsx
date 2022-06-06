import { Link } from 'react-router-dom';
import { StyledProfileImage, StyledUserName } from '../styled';
import { PROFILE_LIST } from 'common/constants';

const UserName = ({ user }) => {
  console.log(user);
  return (
    <Link to="/mypage">
      <StyledUserName>
        <div>{user.nickname}</div>
        <StyledProfileImage
          src={`/assets/CharacterWhiteBG/${PROFILE_LIST[user.character]}`}
          alt="사용자 캐릭터"
          width="50px"
          height="50px"
        />
      </StyledUserName>
    </Link>
  );
};

export default UserName;
