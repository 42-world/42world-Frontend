import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { notiModalState } from '@root/store/notiModal';
import { NotificationService } from '@network';

import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemToggle from './MenuItemToggle';
import UserItems from './UserItems';
import NotiModal from './NotiModal';

// import Popover from '@mui/material/Popover';
import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  const [isOpen, setIsOpen] = useRecoilState(notiModalState);
  const [noti, setNoti] = useState(false);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);
  };

  const handleClickNoti = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(null);
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
          <UserItems onClick={handleClickNoti} noti={noti} />
        </div>
      </StyledTopNav>
      <TopNavSpace />
      {/* <Popover
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
      > */}
      <NotiModal noti={noti} />
      {/* </Popover> */}
    </>
  );
};

export default TopNav;
