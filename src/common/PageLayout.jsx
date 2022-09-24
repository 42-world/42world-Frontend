import { Outlet } from 'react-router-dom';
import TopNav from '@common/TopNav';
import Footer from '@common/Footer';
import ReactHelmet from './ReactHelmet';

export const PageLayout = () => {
  return (
    <>
      <ReactHelmet
        keywords="42World"
        title="42World"
        description="42서울 재학생과 졸업생 모두를 아우르는 커뮤니티"
        favicon="/assets/42worldCharacterLogo.png"
      />
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};
