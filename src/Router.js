import { BrowserRouter, Route, Routes } from 'react-router-dom';

import TopNav from 'common/TopNav';
import { LoginCheck } from './components/organisms/login';
import Article from './components/pages/article/_id';
import Auth from './components/pages/Auth';
import Category from './components/pages/category/_id';
import ErrorPage from './components/pages/Error';
import Login from './components/pages/Login';
import Main from './components/pages/Main';
import Mypage from './components/pages/Mypage';
import Writing from './components/pages/Writing';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/*<Route path="/" element={<LoginCheck />}>*/}
        <Route path="/" element={<TopNav />}>
          <Route exact path="/" element={<Main />} />
          <Route path="/category/:id" element={<Category />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/mypage/article" element={<Mypage />} />
          <Route path="/mypage/comment" element={<Mypage />} />
          <Route path="/mypage/liked" element={<Mypage />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/article/:id" element={<Article />} />
        </Route>
        <Route path="/login" element={<Login />} />
        {/*</Route>*/}
        {/* topnav가 필요하지 않은 LoginCheck만 필요한 경우*/}
        {/*<Route path="/" el ement={<LoginCheck />}>
          <Route exact path="/auth" element={<Auth />} />
        </Route>*/}
        <Route exact path="/" element={<Login isCallback={false} />} />

        <Route
          path="/auth/github/callback"
          element={<Login isCallback={true} />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
