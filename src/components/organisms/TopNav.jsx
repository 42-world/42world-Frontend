import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import { useRecoilState, useRecoilValue } from "recoil";
import { categoryState } from "../../store/category";
import { CategoryService } from "../../network";
import { userState } from "../../store/user";
import profileUtils from "./mypage/utils/profileUtils";

function TopNav() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(false);
  const user = useRecoilValue(userState);
  // TODO : category 상태 어떻게 관리할 건지 논의 후 수정
  // eslint-disable-next-line
  const [category, setCategory] = useRecoilState(categoryState);
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [profilePhoto, setProfilePhoto] = useState(null);

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
    setProfilePhoto(profileUtils.getProfilePhoto(user[0].character));
    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (user[0].length === 1) {
      setProfilePhoto(profileUtils.getProfilePhoto(user[0].character));
    }
  }, [user]);

  window.addEventListener("resize", showButton);

  if (!user[0] || user === undefined || user.length === 0) return <></>;
  else {
    return (
      <>
        <TopNavBlock>
          <nav>
            <div class="side-block">
              <Link to="/" id="logo-btn">
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
                <li className="nav-item item-profile">
                  {user.length === 1 ? (
                    <Link
                      to="/mypage"
                      className="nav-links"
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
                      className="nav-links"
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
            </div>
            <div class="side-block">
              {button &&
                (user.length === 1 ? (
                  <Link to="/mypage" id="profile-btn">
                    <img
                      alt={profilePhoto}
                      src={`${PICTURE_DIR + profilePhoto}`}
                    />
                    <span>{user[0].nickname}</span>
                  </Link>
                ) : (
                  <Link to="/login">
                    <>로그인</>
                    {/* <Button id="login-btn">로그인</Button> */}
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
  height: 100vh;
`;

const TopNavBlock = styled.div`
  background-color: ${(props) => props.theme.secondary};
  a {
    text-decoration: none;
  }
  @media screen and (min-width: 768px) {
    nav {
      background-color: ${(props) => props.theme.secondary};
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
        }
        .menu-icon {
          display: none;
        }
        .nav-menu {
          display: grid;
          grid-template-columns: repeat(4, auto);
          grid-gap: 10px;
          list-style: none;
          text-align: center;
          justify-content: end;
          .nav-item {
            height: 80px;
            .nav-links {
              color: #fff;
              display: flex;
              align-items: center;
              text-decoration: none;
              padding: 0.5rem 1rem;
              height: 100%;
              &:hover {
                border-bottom: 4px solid #fff;
                transition: all 0.2s ease-out;
              }
              .text-area {
                display: none;
              }
              img {
                display: none;
              }
              span {
                display: none;
              }
            }
          }
        }

        #profile-btn {
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
      }
    }
  }

  @media screen and (max-width: 768px) {
    nav {
      background-color: ${(props) => props.theme.secondary};
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
        }
        .menu-icon {
          display: block;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-100%, 60%);
          font-size: 1.8rem;
          cursor: pointer;
          color: ${(props) => props.theme.white};
          font-size: 2rem;
        }
        .nav-menu {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 100vw;
          position: absolute;
          top: 80px;
          left: -100%;
          opacity: 1;
          transition: all 0.5s ease;
          &.active {
            background: ${(props) => props.theme.backgroundTheme4};
            left: 0;
            opacity: 1;
            transition: all 0.5s ease;
            z-index: 1;
          }
          .nav-item {
            height: 80px;
            &.item-profile {
              margin: 2rem 0;
            }
            .nav-links {
              color: #fff;
              display: flex;
              align-items: center;
              text-decoration: none;
              height: 100%;
              text-align: center;
              padding: 1.5rem;
              width: 100vw;
              justify-content: center;
              &:hover {
                background-color: ${(props) => props.theme.primary};
                color: ${(props) => props.theme.white};
                border-radius: 0;
              }
              img {
                width: 4rem;
                border-radius: 50%;
                margin-right: 0.5rem;
              }
              .text-area {
                display: flex;
                flex-direction: column;
                align-items: flex-end;
                span {
                  padding-right: 0.5rem;
                }
              }
            }
          }
        }

        #profile-btn {
          display: none;
        }
      }
    }
  }
`;

export default TopNav;
