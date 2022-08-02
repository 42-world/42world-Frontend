/** @jsxImportSource @emotion/react */
import { useRecoilState } from 'recoil';

import LoginButton from './LoginButton';
import UserName from './UserName';
import NotiModal from './NotiModal';

import { notiModalState } from '@root/store/notiModal';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import { StyledMenuButton } from '../styled';

import { css } from '@emotion/react';
import { TbBellRinging, TbBell } from 'react-icons/tb';

const UserItems = ({ noti }) => {
  const { user } = useGetUser();
  const [isOpen, setIsOpen] = useRecoilState(notiModalState);

  const onClickIcon = () => {
    setIsOpen(bool => !bool);
  };
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
            <StyledMenuButton className="alarm-button" onClick={onClickIcon}>
              {notiIcon()}
              {isOpen && <NotiModal noti={noti} />}
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
    .alarm-button {
      position: relative;
    }
  }
`;
