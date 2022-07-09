import { Link } from 'react-router-dom';

import { getCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { StyledMenuButton } from '../styled/MenuItems.styled';

const MenuItems = () => {
  const { isError, categories } = getCategory();

  return (
    <div className="category-div">
      {categories &&
        categories.map(item => (
          <Link key={item.name} to={`${CATEGORY_URL}/${item.id}`}>
            <StyledMenuButton>{item.name}</StyledMenuButton>
          </Link>
        ))}
    </div>
  );
};

export default MenuItems;
