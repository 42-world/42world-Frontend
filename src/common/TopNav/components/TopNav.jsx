import Logo from './Logo';
import CategoryItems from './CategoryItems';
import Sidebar from './Sidebar';
import UserItems from './UserItems';

import { StyledTopNav, TopNavSpace } from '../styled';

const TopNav = () => {
  return (
    <>
      <StyledTopNav>
        <div className="top-nav">
          <Sidebar />
          <Logo />
          <CategoryItems />
          <UserItems />
        </div>
      </StyledTopNav>
      <TopNavSpace />
    </>
  );
};

export default TopNav;
