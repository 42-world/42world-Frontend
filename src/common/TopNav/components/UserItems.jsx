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
    if (result.length) {
      setNotYetReadCount(result.filter(data => !data.isRead).length);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    <div css={userStyle}>
      {isEmpty(user) ? (
        <div className="button">
          <LoginButton />
        </div>
      ) : (
        <div className="info">
          <div className="alarm-button button" onClick={onClickIcon}>
            <div>
              <img className="alarm-icon" src="/assets/bell.svg"></img>
              <div className="alarm-number">{notYetReadCount}</div>
            </div>
            {isOpen && <NotiModal noti={noti} />}
          </div>
          <div className="button">
            <UserName user={user} />
          </div>
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
    display: flex;
    align-items: center;
  }

  .button {
    background-color: ${props => props.theme.secondary};
    color: ${props => props.theme.textWhite};
    font-weight: bold;
    font-size: 1rem;
    margin: 0 10px;

    /* reset css */
    background: inherit;
    border: none;
    box-shadow: none;
    border-radius: 0;
    padding: 0;
    overflow: visible;
    cursor: pointer;
    outline: 0;
  }
  .alarm-button {
    position: relative;
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
