import React from 'react';

import Logo from './Logo';
import MenuItems from './MenuItems';
import MenuItemToggle from './MenuItemToggle';
import UserItems from './UserItems';
import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <MenuItemToggle />
          <Logo />
          <MenuItems />
          <UserItems />
        </div>
      </StyledTopNav>
      <TopNavSpace />
    </>
  );
};

export default TopNav;
