/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';

import { StyledMenuButton } from '../styled';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import { TbBellRinging, TbBell } from 'react-icons/tb';
import LoginButton from './LoginButton';
import UserName from './UserName';

const UserItems = ({ onClick }) => {
  const { user } = useGetUser();
  return (
    // <div className="user">
    <div css={userStyle}>
      {isEmpty(user) ? (
        <>
          <StyledMenuButton>
            <LoginButton />
          </StyledMenuButton>
        </>
      ) : (
        <>
          {/* TODO : 아이콘 및 모달 적용 */}
          <div className="info">
            <StyledMenuButton className="alarm-button" onClick={onClick}>
              <TbBell className="icon" size="30px" />
            </StyledMenuButton>
            <StyledMenuButton>
              <UserName user={user} />
            </StyledMenuButton>
          </div>
        </>
      )}
    </div>
  );
};

export default UserItems;

const userStyle = css`
  .info {
    display: flex;
    color: white;
  }
`;
