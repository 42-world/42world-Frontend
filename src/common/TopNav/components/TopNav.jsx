import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { notiModalState } from '@root/store/notiModal';
import { NotificationService } from '@network';

import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemToggle from './MenuItemToggle';
import UserItems from './UserItems';

import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  const [isOpen, setIsOpen] = useRecoilState(notiModalState);
  const [noti, setNoti] = useState(false);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);
  };

  const handleClickToggleOpen = () => {
    setIsOpen(bool => !bool);
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
          <UserItems isOpen={isOpen} handleCloseModal={handleClickToggleOpen} noti={noti} />
        </div>
      </StyledTopNav>
      <TopNavSpace />
    </>
  );
};

export default TopNav;
