import { StyledMenuButton } from '../styled';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import LoginButton from './LoginButton';
import UserName from './UserName';

const UserItems = ({ onClick }) => {
  const { user } = useGetUser();
  return (
    <div className="user">
      {isEmpty(user) ? (
        <>
          <StyledMenuButton>
            <LoginButton />
          </StyledMenuButton>
        </>
      ) : (
        <>
          {/* TODO : 아이콘 및 모달 적용 */}
          <StyledMenuButton className="alarm-button" onClick={onClick}>
            알람
          </StyledMenuButton>
          <StyledMenuButton>
            <UserName user={user} />
          </StyledMenuButton>
        </>
      )}
    </div>
  );
};

export default UserItems;
