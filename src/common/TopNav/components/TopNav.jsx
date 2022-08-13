import { useEffect, useState } from 'react';
import { NotificationService } from '@network';

import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemToggle from './MenuItemToggle';
import UserItems from './UserItems';

import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  const [noti, setNoti] = useState(false);

  const getNoti = async () => {
    const result = await NotificationService.getNotifications();
    setNoti(result);
  };

  useEffect(() => {
    getNoti();
  }, []);

  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <MenuItemToggle />
          <Logo />
          <MenuItems />
          <UserItems noti={noti} />
        </div>
      </StyledTopNav>
      <TopNavSpace />
    </>
  );
};

export default TopNav;
