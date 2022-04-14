import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/organisms/TopNav";
import Login from "./components/pages/Login";
import Main from "./components/pages/Main";
import Mypage from "./components/pages/Mypage";
import Writing from "./components/pages/Writing";
import Article from "./components/pages/Article";
import _id from "./components/pages/category/_id"; //category 입니다

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TopNav />}>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/login" element={<Login />} />
          <Route path="/category/:id" element={<_id />} />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/writing" element={<Writing />} />
          <Route path="/article" element={<Article />} />
        </Route>
        {/* <Route path="/" element={<LoginCheck />}>

            <Route path="/" element={<Main />} />
            <Route path="/topics/:slug" element={<_id />} />
            <Route path="/search/:query" element={<_query />} />
            <Route path="/article/:key" element={<_key />} />
          </Route>
          <Route path="/logout" element={<Logout />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
