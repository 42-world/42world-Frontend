import React from 'react';

import Logo from './Logo';
import MenuItems from './MenuItems';
import UserItems from './UserItems';
import { StyledTopNav } from '../styled';

const TopNav = () => {

  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <Logo />
          <MenuItems />
          <UserItems />
        </div>
      </StyledTopNav>
    </>
  );
};

export default TopNav;
