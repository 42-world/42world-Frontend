import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { FaBars } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { MenuItemToggleBlock, StyledMenuToggleButton, CategoryListDiv } from '../styled/MenuItemToggle.styled';

const MenuItems = () => {
  const { isError, categories } = useGetCategory();
  const [isToggled, setIsToggled] = useState(false);

  const categoryListRef = useRef(null);
  const categoryListBoxRef = useRef(null);

  useEffect(() => {
    const categoryListHeight = categoryListRef.current.getBoundingClientRect().height;
    if (isToggled) {
      categoryListBoxRef.current.style.height = `${categoryListHeight}px`;
    } else {
      categoryListBoxRef.current.style.height = '0px';
    }
  }, [isToggled]);

  return (
    <MenuItemToggleBlock className="category-toggle">
      {isToggled ? (
        <IoMdClose onClick={() => setIsToggled(!isToggled)} />
      ) : (
        <FaBars onClick={() => setIsToggled(!isToggled)} />
      )}

      <CategoryListDiv ref={categoryListBoxRef}>
        <div ref={categoryListRef}>
          {categories &&
            categories.map(item => (
              <Link key={item.name} to={`${CATEGORY_URL}/${item.id}`}>
                <StyledMenuToggleButton>{item.name}</StyledMenuToggleButton>
              </Link>
            ))}
        </div>
      </CategoryListDiv>
    </MenuItemToggleBlock>
  );
};

export default MenuItems;
