import React, { useState, useEffect } from "react";
import { Button } from "../atoms/Button";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { categoryState } from "../../store/category";
import { CategoryService } from "../../network";

function TopNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  // TODO : category 상태 어떻게 관리할 건지 논의 후 수정
  // eslint-disable-next-line
  const [category, setCategory] = useRecoilState(categoryState);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 768) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
    (async () => {
      const { data } = await CategoryService.getCategories();
      setCategory(data);
    })();
    // eslint-disable-next-line
  }, []);

  window.addEventListener("resize", showButton);

  return (
    <>
      <TopNavBlock>
        <nav className="navbar">
          <div className="navbar-container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              <img
                src={require("../../assets/images/logo/Logo@05x.png")}
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
                  홈
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/category/1"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  커뮤니티
                </Link>
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
            {button && <Button buttonStyle="btn--outline">로그인</Button>}
          </div>
        </nav>
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

const TopNavBlock = styled.div`
  .navbar {
    background: ${(param) => param.theme.backgroundTheme3};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    position: sticky;
    top: 0;
    z-index: 999;
  }

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    max-width: 1100px;
    margin: 0 5rem 0;
  }

  .navbar-logo {
    color: #fff;
    justify-self: start;
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
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    height: 80px;
  }

  .nav-links {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
  }

  .nav-links:hover {
    border-bottom: 4px solid #fff;
    transition: all 0.2s ease-out;
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
  @media screen and (max-width: 768px) {
    .NavbarItems {
      position: relative;
    }

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
      background: #242222;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: -1rem;
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

export default TopNav;
