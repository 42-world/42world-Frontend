import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserService } from "../../../network";
import { userState } from "../../../store/user";

const LoginCheck = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (user.length === 0) {
      (async () => {
        try {
          const { data } = await UserService.getUser();
          //console.log(userData);
          setUser([data]);
          //navigate("/");
        } catch (e) {
          navigate("/login");
        }
      })();
    } else {
    }
  }, [user, navigate, setUser]);

  if (user === undefined || user.length === 0) return <></>;
  else {
    return <Outlet />;
  }
};

export default LoginCheck;
