import { Link } from 'react-router-dom';

import { useGetCategory, CATEGORY_URL } from '@common/hooks/api/category';
import { StyledMenuButton } from '../styled/MenuItems.styled';

const MenuItems = () => {
  const { isError, categories } = useGetCategory();

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
