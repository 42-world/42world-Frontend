import Account from './Account';
import { StyledMenuButton } from '../styled';
import { useRecoilValue } from 'recoil';
import { userState } from 'store/user';

const UserItems = () => {
  return (
    <div className="user">
      {/* TODO : 아이콘 및 모달 적용 */}
      <StyledMenuButton>알람</StyledMenuButton>
      <Account />
    </div>
  );
};

export default UserItems;
