/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';

import LoginButton from './LoginButton';
import UserName from './UserName';
import NotiModal from './NotiModal';

import { notiModalState } from '@root/store/notiModal';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import { NotificationService } from '@network';
import { theme } from '@styles/theme';
import { StyledMenuButton } from '../styled';

const UserItems = () => {
  const { user } = useGetUser();
  const [noti, setNoti] = useState(null);
  const [isOpen, setIsOpen] = useRecoilState(notiModalState);
  const [notYetReadCount, setNotYetReadCount] = useState(0);

  const onClickIcon = async () => {
    let result;
    if (!isOpen) result = await NotificationService.readAllNotifications();
    setIsOpen(bool => !bool);
  };

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);

    if (noti.length) {
      setNotYetReadCount(noti.filter(data => !data.isRead).length);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);
  return (
    <div css={userStyle}>
      {isEmpty(user) ? (
        <StyledMenuButton>
          <LoginButton />
        </StyledMenuButton>
      ) : (
        <div className="info">
          <StyledMenuButton className="alarm-button" onClick={onClickIcon}>
            <div>
              <img className="alarm-icon" src="/assets/bell.svg"></img>
              <div className="alarm-number">{notYetReadCount}</div>
            </div>
            {isOpen && <NotiModal noti={noti} />}
          </StyledMenuButton>
          <StyledMenuButton>
            <UserName user={user} />
          </StyledMenuButton>
        </div>
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
  .alarm-icon {
    width: 2rem;
    height: 2rem;
  }
  .alarm-number {
    position: absolute;
    top: 0.2rem;
    left: 1.2rem;

    width: 1rem;
    height: 1rem;
    line-height: 1rem;

    text-align: center;
    border-radius: 50%;

    font-size: 0.6rem;

    background-color: ${theme.buttonRed1};
  }
`;
