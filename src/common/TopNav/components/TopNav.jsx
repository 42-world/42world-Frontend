import { useState } from 'react';

import Logo from './Logo';
import MenuItems from './MenuItems';
import UserItems from './UserItems';
import NotiModal from './NotiModal';

import Popover from '@mui/material/Popover';
import { StyledTopNav } from '../styled';

const TopNav = () => {
  const [anchorEl, setAnchorEl] = useState(false);

  const handleClick = e => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <Logo />
          <MenuItems />
          <UserItems onClick={handleClick} />
        </div>
      </StyledTopNav>

      <Popover
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={anchorEl}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <NotiModal />
      </Popover>
    </>
  );
};

export default TopNav;
