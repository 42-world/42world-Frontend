import { createContext } from "react";

const UserContext = createContext({
  isLogin: false,
  setIsLogin: () => {},
});

export default UserContext;
