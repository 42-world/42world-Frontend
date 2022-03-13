import "./App.css";
import Router from "./Router";
import { Instance } from "./apis/index";
import UserContext from "./contexts/user";
import { useState } from "react";

function App() {
  // useContext에 로그인정보 담기
  const { token } = localStorage;
  if (token) {
    Instance.defaults.headers.common["Authorization"] = token;
  }

  const [isLogin, setIsLogin] = useState(!!token);
  const value = {
    isLogin,
    setIsLogin: (val) => setIsLogin(val),
  };
  return (
    <UserContext.Provider value={value}>
      <Router />
    </UserContext.Provider>
  );
}

export default App;
