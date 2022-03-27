//import React, { useState } from "react";
import styled from "styled-components";
import { Signin, Signup } from "../organisms/login";
import { useState } from "react";
//import { useNavigate } from "../../../node_modules/react-router-dom/index";

const Login = () => {
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(true);
  };
  //const navigate = useNavigate();
  //const [loginInfo, setLoginInfo] = useState({});
  //const { setIsLogin } = useContext(UserContext);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setLoginInfo({ ...loginInfo, [name]: value });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // const { error, token, msg } = await tryLogin(loginInfo);
  //   // console.log(error, token, msg);
  //   // if (!error) {
  //   //   localStorage.setItem("token", token);
  //   //   //localStorage.token = token;
  //   //   //Instance.defaults.headers.common["Authorization"] = token;
  //   //   axios.defaults.headers.common["Authorization"] = token;
  //   //   setIsLogin(true);
  //   //   navigate("/");
  //   // } else {
  //   //   localStorage.removeItem("token");
  //   //   alert(msg);
  //   // }
  // };

  return (
    <LoginBlock>
      <div className="video-container">
        <video
          src="assets/videos/video-1.mp4"
          type="video/mp4"
          autoPlay
          loop
          muted
        />
        {signup ? (
          <Signup handleSignup={handleSignup} />
        ) : (
          <Signin handleSignup={handleSignup} />
        )}
      </div>
    </LoginBlock>
  );
};

// export const Main = styled.main``;
// export const PageWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   min-height: 100vh;
//   background-color: #fafafa;
// `;

// export const InputText = styled.input`
//   padding-left: 8px;
//   height: 36px;
//   background: #fafafa;
//   border: 1px solid #dbdbdb;
//   border-radius: 3px;
//   & + & {
//     //인접형제결합자 : InputText(&는 현재 쓰는 성분)
//     margin-top: 6px;
//   }
// `;
// export const BtnSubmit = styled.button`
//   margin: 8px 0;
//   padding: 5px 9px;
//   background: #ffc000;
//   color: #000;
//   border: transparent;
//   border-radius: 4px;
//   font-weight: bold;
// `;

// export const SignupWrapper = styled.div`
//   padding: 15px 0;
//   font-size: 14px;
//   a {
//     color: #ffc000;
//     text-decoration: none;
//     font-weight: bold;
//   }
// `;

const LoginBlock = styled.div`
  background: url("/images/img-home.jpg") center center/cover no-repeat;
  @media screen and (min-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
    }
  }

  @media screen and (max-width: 960px) {
    .video-container {
      position: fixed;
      scrollbar-width: none;

      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      object-fit: contain;
      video {
        object-fit: cover;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: -1;
      }
    }
  }
`;

export default Login;
