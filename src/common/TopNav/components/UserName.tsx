import { Link } from 'react-router-dom';
import { StyledProfileImage, StyledUserName } from '../styled';
import { PICTURE_DIR, PROFILE_LIST } from '@common/constants';
import { User } from '@network/types/User';

<<<<<<< HEAD
interface IProps {
  user: User;
}

const UserName = ({ user }: IProps) => {
=======
interface Props {
  user: User;
}

const UserName = ({ user }: Props) => {
>>>>>>> 786f1c2f2abaa1f923f7bd74172abb006a88ba51
  return (
    <Link to="/mypage">
      <StyledUserName>
        <div className="username-div">{user.nickname}</div>
        <StyledProfileImage
          src={`${PICTURE_DIR}${PROFILE_LIST[user.character]}`}
          alt="사용자 캐릭터"
          width="50px"
          height="50px"
        />
      </StyledUserName>
    </Link>
  );
};

export default UserName;
