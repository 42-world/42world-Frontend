import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserService } from "../../../network";
import { userState } from "../../../store/user";

const LoginCheck = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);
  useEffect(() => {
    if (user.length === 0 || user[0] === null) {
      (async () => {
        try {
          const { data } = await UserService.getUser();
          if (data === null) {
            navigate("/login");
          }
          setUser([data]);
        } catch (e) {
          navigate("/login");
        }
      })();
    } else {
    }
  }, [user, navigate, setUser]);

  console.log(user);
  if (user === undefined || user.length === 0) return <></>;
  else {
    return <Outlet />;
  }
};

export default LoginCheck;
