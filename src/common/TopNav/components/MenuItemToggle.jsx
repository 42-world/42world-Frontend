import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SwipeableDrawer } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { MenuItemToggleBlock, StyledMenuToggleButton, CategoryListDiv } from '../styled/MenuItemToggle.styled';
import { SITEMAP } from '@common/constants';
import SidebarCategoryList from './SidebarCategoryList';

const MenuItems = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleOpenMenu = (anchor, open) => {
    setIsToggled(!isToggled);
  };

  return (
    <MenuItemToggleBlock className="category-toggle">
      <FaBars onClick={handleOpenMenu} />

      <SwipeableDrawer anchor="left" open={isToggled} onClose={handleOpenMenu} onOpen={handleOpenMenu}>
        <CategoryListDiv>
          <SidebarCategoryList />
        </CategoryListDiv>
      </SwipeableDrawer>
    </MenuItemToggleBlock>
  );
};

export default MenuItems;
