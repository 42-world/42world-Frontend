import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { PageLayout } from '@common/PageLayout';
import ErrorPage from './components/pages/Error';
import Login from './components/pages/login/Login';
import Main from './components/pages/main/Main';
import Mypage from './components/pages/Mypage';
import Auth from './components/pages/Auth';
import Donation from './components/pages/Donation';
import Writing from './components/pages/writing';
import ArticleDetailPage from './components/pages/articles/ArticleDetailPage';
import ArticleListPage from './components/pages/articles/ArticleListPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Main />} />
          <Route path="category" element={<ArticleListPage />} />
          <Route path="category/:id" element={<ArticleListPage />} />
          <Route path="mypage" element={<Mypage />} />
          <Route path="mypage/:articleType" element={<Mypage />} />
          <Route path="writing" element={<Writing />} />
          <Route path="article/:id" element={<ArticleDetailPage />} />
          <Route path="/donation" element={<Donation />} />
        </Route>

        <Route path="login" element={<Login />} />
        <Route path="auth/github/callback" element={<Login />} />
        <Route path="auth" element={<Auth />} />
        <Route path="error" element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
