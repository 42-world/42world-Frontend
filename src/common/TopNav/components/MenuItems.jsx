import { Link } from 'react-router-dom';

import { StyledMenuButton } from '../styled/MenuItems.styled';

const categories = [
  { name: '인기글', url: '/' },
  { name: '자유게시판', url: '/' },
  { name: '익명게시판', url: '/' },
];

const MenuItems = () => {
  return (
    <div className="category-div">
      {categories &&
        categories.map(item => (
          <Link to={item.url}>
            <StyledMenuButton>{item.name}</StyledMenuButton>
          </Link>
        ))}
    </div>
  );
};

export default MenuItems;
