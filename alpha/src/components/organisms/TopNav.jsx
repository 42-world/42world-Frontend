import React, { useState, useEffect } from "react";
import { Button } from "../atoms/Button";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState } from "../../store/category";
import { CategoryService } from "../../network";
import { userState } from "../../store/user";

function TopNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const user = useRecoilValue(userState);
  // TODO : category 상태 어떻게 관리할 건지 논의 후 수정
  // eslint-disable-next-line
  const [category, setCategory] = useRecoilState(categoryState);
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [profilePhoto, setProfilePhoto] = useState(null);

  const getProfilePhoto = (id) => {
    const PROFILE_LIST = [
      { id: 0, image: "bbo.png" },
      { id: 1, image: "bora.png" },
      { id: 2, image: "ddub.png" },
      { id: 3, image: "nana.png" },
      { id: 4, image: "bongsoon.png" },
      { id: 5, image: "hyeonkim.png" },
      { id: 6, image: "babybbo.png" },
      { id: 7, image: "babynana.png" },
      { id: 8, image: "babybora.png" },
      { id: 9, image: "babyddub.png" },
      { id: 10, image: "babyhyeonkim.png" },
    ];

    const profile = PROFILE_LIST.find((imgRef) => imgRef.id === id);
    return profile?.image;
  };

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
    setProfilePhoto(getProfilePhoto(user[0].character));
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (user[0].length === 1) {
      setProfilePhoto(getProfilePhoto(user[0].character));
    }
  }, [user]);

  window.addEventListener("resize", showButton);

  if (user === undefined || user.length === 0) return <></>;
  else {
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
                <li>
                  {user.length === 1 ? (
                    <Link
                      to="/mypage"
                      className="nav-links-mobile-profile"
                      onClick={closeMobileMenu}
                    >
                      <div className="text-area">
                        <span>{user[0].nickname}님 안녕하세요!</span>
                        <span>{user[0].role}</span>
                      </div>

                      <img
                        alt={profilePhoto}
                        src={`${PICTURE_DIR + profilePhoto}`}
                      />
                    </Link>
                  ) : (
                    <Link
                      to="/login"
                      className="nav-links-mobile"
                      onClick={closeMobileMenu}
                    >
                      로그인
                    </Link>
                  )}
                </li>
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
              </ul>
              {button &&
                (user.length === 1 ? (
                  <Link to="/mypage" className="nav-links-profile">
                    <img
                      alt={profilePhoto}
                      src={`${PICTURE_DIR + profilePhoto}`}
                    />
                    <span>{user[0].nickname}</span>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button buttonStyle="btn--outline">로그인</Button>
                  </Link>
                ))}
            </div>
          </nav>
        </TopNavBlock>
        <OutletWrapper>
          <Outlet />
        </OutletWrapper>
      </>
    );
  }
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

  .nav-links-profile {
    //width: 100%;
    height: 80%;
    color: ${(props) => props.theme.textGray2};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    padding: 0rem 0.2rem;
    border-radius: 4rem;
    background-color: ${(props) => props.theme.backgroundTheme4};
    img {
      width: 3.5rem;
      border-radius: 50%;
      margin-right: 0.5rem;
    }
    span {
      padding-right: 1rem;
    }
    &:hover {
      color: ${(props) => props.theme.textBlack};
      background-color: ${(props) => props.theme.primary};
    }
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
  .nav-links-mobile-profile {
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
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 35vh;
      position: absolute;
      top: 80px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: ${(props) => props.theme.backgroundTheme4};
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 1.5rem;
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

    .nav-links-mobile-profile {
      width: 90vw;
      height: 100%;
      color: ${(props) => props.theme.textGray2};
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 1rem 0 2rem 0;
      border-radius: 0.1rem;
      background-color: ${(props) => props.theme.backgroundTheme4};
      border-bottom: 2px solid ${(props) => props.theme.backgroundTheme2};
      transition: all 0.5s ease;
      .text-area {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
      }
      img {
        width: 4rem;
        border-radius: 50%;
        margin-right: 0.5rem;
      }
      span {
        padding-right: 0.5rem;
      }
    }
  }
`;

export default TopNav;
