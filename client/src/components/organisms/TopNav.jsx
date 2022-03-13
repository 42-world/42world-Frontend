import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import ModalAddPost from "./modals/AddPost";
import logo from "../../assets/logo/logo.png";
import Writing from "./modals/Writing";
import WritingModalContext from "../../contexts/WritingModalContext";

function TopNav() {
  //const [showModalAddPost, setShowModalAddPost] = useState(false);
  const [isShowWritingModal, setIsShowWritingModal] = useState(false);

  // useEffect(() => {
  //   document.body.style.overflow = isShowWritingModal ? "hidden" : "";
  // }, [isShowWritingModal]);

  const clickHandler = (e) => {
    setIsShowWritingModal(true);
  };

  return (
    <NavContainer>
      <nav>
        <div className="side-block">
          <Link to="/" id="logo-btn">
            <img src={logo} alt="알럼나이 로고" />
          </Link>
          <Link
            to="/"
            className={
              "text-menu" + (useLocation().pathname === "/" ? " active" : "")
            }
          >
            홈
          </Link>
          <Link
            to="/company"
            className={
              "text-menu" +
              (useLocation().pathname === "/company" ? " active" : "")
            }
          >
            기업 리뷰
          </Link>
        </div>
        <div className="side-block">
          {/* <SmallSearchbar /> */}
          <a onClick={clickHandler} id="write-btn">
            글쓰기
          </a>
          <Link to="/logout">
            <LoginBtn>로그아웃</LoginBtn>
          </Link>
          {/* <a @click.prevent="clickLoginButton" id="login-btn">{{user.email ? "로그아웃": "로그인"}}</a> */}
        </div>
      </nav>
      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
      {isShowWritingModal && (
        <Writing onClose={() => setIsShowWritingModal(false)} />
      )}
    </NavContainer>
  );
}

const NavContainer = styled.div`
  border-bottom: 1px solid #d4d4d4;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 80px;
    margin: auto;
    padding: 0 20px;
    max-width: 1100px;
    .side-block {
      display: flex;
      height: 100%;
      align-items: center;
      #logo-btn {
        margin-right: 60px;
        img {
          width: 130px;
        }
      }
      .text-menu {
        color: #222;
        font-size: 20px;
        margin-right: 30px;
        & + & {
          margin-left: 10px;
        }
        &.active {
          font-weight: bold;
        }
      }
      #write-btn {
        background: rgb(218, 50, 56);
        color: white;
        font-size: 14px;
        height: 40px;
        margin-left: 10px;
        width: 82px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }
      #login-btn {
        background: white;
        color: rgb(34, 34, 34);
        font-size: 14px;
        border: solid 1px rgb(212, 212, 212);
        height: 40px;
        margin-left: 10px;
        width: 82px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
      }
    }
  }
`;

const Header = styled.header`
  border-bottom: 1px solid #d4d4d4;
`;
const Main = styled.main``;
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  margin: auto;
  padding: 0 20px;
  max-width: 1100px;
`;
const ImgLogo = styled.img`
  width: 104px;
  vertical-align: bottom;
`;
const SideBlock = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
`;
const WriteBtn = styled.a`
  background: rgb(218, 50, 56);
  color: white;
  font-size: 14px;
  height: 40px;
  margin-left: 10px;
  width: 82px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
`;
const LoginBtn = styled.a`
  background: white;
  color: rgb(34, 34, 34);
  font-size: 14px;
  border: solid 1px rgb(212, 212, 212);
  height: 40px;
  margin-left: 10px;
  width: 82px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  cursor: pointer;
`;

const OutletWrapper = styled.div`
  //margin-top: 70px;
  height: 100vh;
  background: #fafafa;
`;
// const SearchWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   padding: 3px 16px;
//   box-sizing: border-box;
//   height: 36px;
//   min-width: 125px;
//   width: 268px;
//   background-color: #efefef;
//   border-radius: 8px;
// `;
// const InputSearch = styled.input`
//   background: transparent;
//   border: none;
//   width: 100%;
//   height: 100%;
// `;

// const IconWrapper = styled.div`
//   cursor: pointer;
//   display: flex;
//   align-items: center;
//   & + & {
//     margin-left: 22px;
//   }
// `;

export default TopNav;
