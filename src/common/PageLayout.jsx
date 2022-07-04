import { Outlet } from 'react-router-dom';

import TopNav from 'common/TopNav';

export const PageLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
    </>
  );
};
