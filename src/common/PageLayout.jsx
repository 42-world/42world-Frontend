import { Outlet } from 'react-router-dom';
import TopNav from "common/TopNav";

export const PageLayout = () => {
  return (
    <>
      <TopNav />
      <Outlet />
	  {/* 나중에 푸터 여기에 배치해도 됨 */}
    </>
  )
}