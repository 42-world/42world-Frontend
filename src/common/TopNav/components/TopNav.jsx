import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { notiModalState } from '@root/store/notiModal';
import { NotificationService } from '@network';

import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemToggle from './MenuItemToggle';
import UserItems from './UserItems';
import NotiModal from './NotiModal';

import Popover from '@mui/material/Popover';
import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  const [modalTarget, setModalTarget] = useRecoilState(notiModalState);
  const [noti, setNoti] = useState(null);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);
  };

  const handleClickNoti = e => {
    setModalTarget(e.currentTarget);
  };
  const handleClose = () => {
    setModalTarget(null);
  };

  useEffect(async () => {
    getNoti();
  }, []);

  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <MenuItemToggle />
          <Logo />
          <MenuItems />
          <UserItems onClick={handleClickNoti} />
        </div>
      </StyledTopNav>
      <TopNavSpace />
      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={modalTarget}
        anchorEl={modalTarget}
        onClose={handleClose}
      >
        <NotiModal noti={noti} />
      </Popover>
    </>
  );
};

export default TopNav;
