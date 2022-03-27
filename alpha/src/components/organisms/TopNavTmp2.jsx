import React, { useState, useEffect } from "react";
import { Button } from "../atoms/Button.jsx";
import { Link } from "react-router-dom";
import styled from "../../../node_modules/styled-components/dist/styled-components.cjs";
import { Outlet } from "../../../node_modules/react-router-dom/index.js";
import SiteNav, { ContentGroup } from "../atoms/Navbar.js";

function TopNavTMP() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener("resize", showButton);
  return (
    <>
      <TopNavBlock>
        <div className="navbar-container">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img
              src="./assets/images/logo/Logo@05x.png"
              alt=""
              onClick={handleClick}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                커뮤니티
              </Link>
              <ul className="nav-contents">
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                커리어
              </Link>
              <ul className="nav-contents">
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                일상생활
              </Link>
              <ul className="nav-contents">
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                프로젝트
              </Link>
              <ul className="nav-contents">
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
                <li>
                  <Link to="/" className="contents-links">
                    자유게시판
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="/login"
                className="nav-links-mobile"
                onClick={closeMobileMenu}
              >
                로그인
              </Link>
            </li>
          </ul>
          {button && (
            <Link to="/login">
              <Button buttonStyle="btn--outline">로그인</Button>
            </Link>
          )}
        </div>
      </TopNavBlock>

      <OutletWrapper>
        <Outlet />
      </OutletWrapper>
    </>
  );
}

const OutletWrapper = styled.div`
  //margin-top: 70px;
  height: 100vh;
  //background: #fafafa;
`;

const TopNavBlock = styled.nav`
  background-color: #2a2d38;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: sticky;
  top: 0;
  z-index: 999;

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1100px;
  }

  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
  }

  .fa-typo3 {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 5px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
    .nav-item {
      width: 120px;
      position: relative;
      margin: 0 1px;
      .nav-links {
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        padding: 0 1rem;
        height: 100%;
      }
      &:hover {
        color: black;
        transition: all 0.2s ease-out;
        background-color: var(--primary-point);

        .nav-contents {
          display: block;
        }
      }

      .nav-contents {
        width: 250px;
        position: relative;
        left: 0;
        top: -18px;
        display: none;
        background-color: var(--primary-point);
        border-radius: 0 0 5px 5px;
        li {
          display: flex;
          .contents-links {
            padding: 10px 10px;
            font-size: 14px;
            color: #000;
            cursor: pointer;
            text-decoration: none;
          }
          &:hover {
            background-color: var(--primary-white);
            color: black;
            margin: 0;
            + .contents-links {
              font-weight: bold;
              height: 35px;
              overflow: visible;
              padding: 0;
            }
          }
        }
      }
    }
  }

  .fa-bars {
    color: #fff;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  @media screen and (max-width: 960px) {
    /* .NavbarItems {
      position: relative;
    } */

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      position: fixed;
      background: #242222;
      left: 0;
      opacity: 1;
      width: 100%;
      height: 93%;
      transition: all 0.5s ease;

      .nav-item {
        .nav-links {
          display: block;
          width: 100%;
          justify-content: center;
          align-items: center;
          &:hover {
            background-color: #fff;
            color: #242424;
            border-radius: 0;
          }
        }
        .nav-contents {
        }
      }
    }

    /* .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    } */

    .nav-links:hover {
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: #fff;
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;

export default TopNavTMP;
