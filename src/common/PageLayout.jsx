import { Outlet } from 'react-router-dom';
import TopNav from '@common/TopNav';
import Footer from '@common/Footer';

export const PageLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};
