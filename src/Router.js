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
import { URLs } from './common/urls';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageLayout />}>
          <Route exact path="/" element={<Main />} />
          <Route path={URLs.CATEGORY} element={<ArticleListPage />} />
          <Route path={`${URLs.CATEGORY}/:id`} element={<ArticleListPage />} />
          <Route path={URLs.MYPAGE} element={<Mypage />} />
          <Route path={`${URLs.MYPAGE}/:articleType`} element={<Mypage />} />
          <Route path={URLs.WRITING} element={<Writing />} />
          <Route path={`${URLs.WRITING}/:id`} element={<Writing />} />
          <Route path={`${URLs.ARTICLE}/:id`} element={<ArticleDetailPage />} />
          <Route path={URLs.DONATION} element={<Donation />} />
        </Route>

        <Route path={URLs.LOGIN} element={<Login />} />
        <Route path={`${URLs.AUTH}/github/callback`} element={<Login />} />
        <Route path={URLs.AUTH} element={<Auth />} />
        <Route path={URLs.ERROR} element={<ErrorPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
