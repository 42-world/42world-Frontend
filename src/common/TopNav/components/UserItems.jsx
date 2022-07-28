/** @jsxImportSource @emotion/react */
import LoginButton from './LoginButton';
import UserName from './UserName';
import { css } from '@emotion/react';
import { StyledMenuButton } from '../styled';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import { TbBellRinging, TbBell } from 'react-icons/tb';

const UserItems = ({ onClick, noti }) => {
  const { user } = useGetUser();

  const notiIcon = () => {
    if (isEmpty(noti)) {
      return <TbBell className="alarm-icon" size="30px" />;
    }
    return <TbBellRinging className="alarm-icon" size="30px" />;
  };
  return (
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
              {notiIcon()}
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
