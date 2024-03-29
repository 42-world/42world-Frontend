/** @jsxImportSource @emotion/react */
import { useState, useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { css } from '@emotion/react';

import LoginButton from './LoginButton';
import UserName from './UserName';
import NotiModal from './NotiModal';

import { Notification } from '@network/types/Notification';
import { notiModalState } from '@root/store/notiModal';
import { useGetUser } from '@common/hooks/api/user';
import { isEmpty } from '@common/utils';
import { NotificationService } from '@root/network';
import { theme } from '@root/styles/theme';

const UserItems = () => {
  const { user } = useGetUser();
  const [noti, setNoti] = useState<Notification[] | null>(null);
  const [isOpen, setIsOpen] = useRecoilState(notiModalState);
  const [notYetReadCount, setNotYetReadCount] = useState(0);

  const onClickIcon = async () => {
    let result;
    if (!isOpen) result = await NotificationService.readAllNotifications();
    setIsOpen(bool => !bool);
  };

  const getNoti = async () => {
    const result: any = await NotificationService.getNotifications();
    // Notification[] 타입이 어째서 일치하지 않는다고 나오는가?

    setNoti(result);
    if (result.length) {
      setNotYetReadCount(result.filter((data: Notification) => !data.isRead).length);
    }
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    <>
      {isEmpty(user) ? (
        <div css={button}>
          <LoginButton />
        </div>
      ) : (
        <div css={userInfoStyle}>
          <div css={alarmButton} onClick={onClickIcon}>
            <img css={alarmIcon} src="/assets/bell.svg"></img>
            <div css={alarmNumber}>{notYetReadCount}</div>
            {isOpen && <NotiModal noti={noti} />}
          </div>
          <div css={button}>
            <UserName user={user} />
          </div>
        </div>
      )}
    </>
  );
};
export default UserItems;

const userInfoStyle = css`
  display: flex;
  color: white;
  display: flex;
  align-items: center;
`;

const button = css`
  background-color: ${theme.secondary};
  color: ${theme.textWhite};
  font-weight: bold;
  font-size: 1rem;
  margin: 0 10px;
  cursor: pointer;
`;

const alarmButton = css`
  position: relative;
  background-color: ${theme.secondary};
  color: ${theme.textWhite};
  font-weight: bold;
  font-size: 1rem;
  margin: 0 10px;
  cursor: pointer;
`;

const alarmIcon = css`
  width: 1.8rem;
  height: 1.8rem;
`;

const alarmNumber = css`
  position: absolute;
  top: 0rem;
  left: 1rem;

  width: 1rem;
  height: 1rem;
  line-height: 1rem;

  text-align: center;
  border-radius: 50%;

  font-size: 0.6rem;

  background-color: ${theme.buttonRed1};
`;
