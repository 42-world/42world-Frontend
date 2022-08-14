/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import NotificationsIcon from '@mui/icons-material/Notifications';

import { StyledMenuButton } from '../styled';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import LoginButton from './LoginButton';
import UserName from './UserName';
const UserItems = ({ onClick }) => {
  const { user } = useGetUser();
  return (
    <div css={UserItemsStyle}>
      {isEmpty(user) ? (
        <>
          <LoginButton />
        </>
      ) : (
        <>
          {/* TODO : 아이콘 및 모달 적용 */}
          <NotificationsIcon css={UserItemNotificationStyle} onClick={onClick} />
          <StyledMenuButton>
            <UserName user={user} />
          </StyledMenuButton>
        </>
      )}
    </div>
  );
};

const UserItemsStyle = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const UserItemNotificationStyle = css`
  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;
`;

export default UserItems;
