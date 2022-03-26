//import React, { useState } from "react";
import styled from "styled-components";
import { Signin, Signup } from "../organisms/login";
import { useState } from "react";
//import { useNavigate } from "../../../node_modules/react-router-dom/index";

const Login = () => {
  const [signup, setSignup] = useState(false);

  const handleSignup = () => {
    setSignup(!signup);
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
      .main {
        display: block;
        justify-content: center;
        align-items: center;
        .title {
          width: 500px;
          padding: 10px 0;
          margin-bottom: 10px;
          font-size: 1.5rem;
          color: white;
          text-align: center;
          font-weight: bold;
        }
        .Box {
          width: 500px;
          padding: 10px 0;
          margin-bottom: 10px;
          background: var(--primary-white);
          border: 1px solid #dbdbdb;
          text-align: center;
          border-radius: 10px;
          .Alert {
            padding: 20px 5px;
            font-size: 1.25rem;
            p {
              margin-top: 5px;
              font-weight: 700;
              .Important {
                color: var(--primary-point);
              }
            }
          }
          .LoginTitle {
            display: block;
            margin-top: 50px;
            margin-bottom: 10px;
            font-size: 2rem;
            font-weight: bold;
          }
          .BtnSeoul {
            width: 77%;
            padding: 13px 9px;
            margin-bottom: 20px;
            font-size: 1.25rem;
            background: #2a2d38;
            color: #fff;
            border: 1px solid #d8d8d8;
            box-sizing: border-box;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
          }
          .Loginform {
            margin-top: 24px;
            padding: 0 40px;
            display: flex;
            flex-direction: column;
          }
        }
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
      .main {
        position: relative;
        width: 370px;
        justify-content: center;
        align-items: center;

        .title {
          width: 100%;
          padding: 10px 0;
          margin-bottom: 10px;
          font-size: 1.5rem;
          color: white;
          text-align: center;
          font-weight: bold;
        }
        .Box {
          width: 100%;
          padding: 10px 4px;
          margin-bottom: 10px;
          background: var(--primary-white);
          border: 1px solid #dbdbdb;
          text-align: center;
          border-radius: 10px;
          .Alert {
            padding: 20px 5px;
            font-size: 1rem;
            p {
              margin-top: 5px;
              font-weight: 700;
              .Important {
                color: var(--primary-point);
              }
            }
          }
          .LoginTitle {
            display: block;
            margin-top: 50px;
            margin-bottom: 10px;
            font-size: 1.5rem;
            font-weight: bold;
          }
          .BtnSeoul {
            width: 77%;
            padding: 13px 9px;
            margin-bottom: 20px;
            font-size: 1rem;
            background: #2a2d38;
            color: #fff;
            border: 1px solid #d8d8d8;
            box-sizing: border-box;
            border-radius: 10px;
            font-weight: bold;
            cursor: pointer;
          }
          .Loginform {
            margin-top: 24px;
            padding: 0 40px;
            display: flex;
            flex-direction: column;
          }
        }
      }
    }
  }
`;

export default Login;
