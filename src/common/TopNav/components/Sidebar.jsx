/** @jsxImportSource @emotion/react */

import { useState, useRef, useEffect } from 'react';
import { css } from '@emotion/react';
import { Link } from 'react-router-dom';

import { SwipeableDrawer } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { SITEMAP } from '@common/constants';
import SidebarCategoryList from './SidebarCategoryList';
import QuickLink from '@common/QuickLink/QuickLink';
import { theme } from '@styles/theme';

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleOpenMenu = (anchor, open) => {
    setIsToggled(!isToggled);
  };

  return (
    <div css={SidebarStyle}>
      <FaBars css={MenuIconStyle} onClick={handleOpenMenu} />

      <SwipeableDrawer anchor="left" open={isToggled} onClose={handleOpenMenu} onOpen={handleOpenMenu}>
        <div css={SidebarDrawerStyle}>
          <SidebarCategoryList setIsToggled={setIsToggled} />
          <QuickLink />
        </div>
      </SwipeableDrawer>
    </div>
  );
};

const SidebarStyle = css`
  display: none;
  margin: 0;

  ${theme.mobileSize} {
    display: flex;
  }
`;

const MenuIconStyle = css`
  width: 1.5rem;
  height: 1.5rem;
  margin: 0 0.5rem;
`;

const SidebarDrawerStyle = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  overflow-y: scroll;
  overflow-x: hidden;

  width: 80vw;
  min-height: 100vh;
  background-color: ${theme.secondary};

  transition: all 0.3s ease-in-out;
`;

export default Sidebar;
