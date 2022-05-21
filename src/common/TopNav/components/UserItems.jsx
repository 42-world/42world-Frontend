import Account from './Account';
import { StyledMenuButton } from '../styled';
import { useRecoilValue } from 'recoil';
import { userState } from 'store/user';


const UserItems = () => {
   const user = useRecoilValue(userState);

  return (
    <div className="user">
      {/* TODO : 아이콘 및 모달 적용 */}
      <StyledMenuButton>알람</StyledMenuButton>
      <Account user={user} />
    </div>
  );
};

export default UserItems;
