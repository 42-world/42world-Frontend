import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { UserService } from "../../../network";
import { userState } from "../../../store/user";

const LoginCheck = () => {
  const navigate = useNavigate();
  const [user, setUser] = useRecoilState(userState);

  // useEffect(() => {
  //   (async () => {
  //     const user = await getUser();
  //     console.log("user" + user);
  //     console.log("user!" + !user);
  //     console.log("user!!" + !!user);
  //     setUser(!!user);

  //     if (!user) {
  //       navigate("/login");
  //     }
  //   })();
  // }, [user, navigate]);
  useEffect(() => {
    if (user.length == 0) {
      (async () => {
        try {
          const userData = await UserService.getNoviceProfile();
          setUser(userData);
        } catch (e) {
          navigate("/login");
        }
      })();
    } else {
    }
  }, [user, navigate]);

  return <Outlet />;
};

export default LoginCheck;
