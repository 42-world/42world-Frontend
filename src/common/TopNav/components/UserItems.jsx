import Account from './Account';
import { StyledMenuButton } from '../styled';

const dummy_user = {
  nickname: '아이린',
};

const UserItems = () => {
  //  const user = useRecoilValue(userState);
  const user = dummy_user;

  return (
    <div className="user">
      {/* TODO : 모달 적용 */}
      <StyledMenuButton>알람</StyledMenuButton>
      <Account user={user} />
    </div>
  );
};

export default UserItems;
