import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { SwipeableDrawer } from '@mui/material';
import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { MenuItemToggleBlock, StyledMenuToggleButton, CategoryListDiv } from '../styled/MenuItemToggle.styled';
import { SITEMAP } from '@common/constants';
import SidebarList from './SidebarList';

const MenuItems = () => {
  const { isError, categories } = useGetCategory();
  const [isToggled, setIsToggled] = useState(false);

  const [categoryList, setCategoryList] = useState([]);

  const handleOpenMenu = (anchor, open) => {
    setIsToggled(!isToggled);
  };

  return (
    <MenuItemToggleBlock className="category-toggle">
      <FaBars onClick={handleOpenMenu} />

      <SwipeableDrawer anchor="left" open={isToggled} onClose={handleOpenMenu} onOpen={handleOpenMenu}>
        <CategoryListDiv>
          <SidebarList
            listTitle={'커뮤니티'}
            listItem={categories.map(category => {
              return { name: category.name, link: `${CATEGORY_URL}/${category.id}` };
            })}
          />
        </CategoryListDiv>
      </SwipeableDrawer>
    </MenuItemToggleBlock>
  );
};

export default MenuItems;
