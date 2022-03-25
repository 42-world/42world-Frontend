import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import MypageData from "../../datas/mypage";

const MypageProfileSect = () => {
  return (
    <MypageProfileContainer
      windowWidth={window.innerWidth}
      windowHeight={window.innerHeight}>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={MypageData.profilePhoto} />
        <button>사진 변경</button>
      </div>
      <div className="mypage-auth-sect">
        <h1>{MypageData.userName}</h1>
        <div className="mypage-auth-button">
          <button className="btn-auth-42">42인증하기</button>
          <button className="btn-logout">로그아웃</button>
        </div>
      </div>
    </MypageProfileContainer>
  );
};

const MyPageLinkSect = () => {
  return (
    <>
      <MyPageLinkContainer>bye</MyPageLinkContainer>
    </>
  );
};

const Mypage = () => {
  return (
    <MypageBlock>
      <MypageContainer windowWidth={window.innerWidth}>
        <h1>마이페이지</h1>
        <hr />
        <div className="mypage-section">
          <MypageProfileSect />
          <MyPageLinkSect />
        </div>
      </MypageContainer>
      <div>게시물 영역</div>
    </MypageBlock>
  );
};

const MypageProfileContainer = styled.div`
  width: 75%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  .mypage-photo-sect {
    border: 1px solid blue;
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    img {
      ${(props) =>
        props.windowWidth < props.windowHeight ? "width: 70%" : "height: 70%"};
      border: 2px solid black;
      border-radius: 50%;
      margin-bottom: 5px;
    }
    button {
      padding: 2pt 5pt;
      width: fit-content;
      height: 16pt;
      font-size: 10pt;
      background-color: #2a2d38;
      color: white;
      border: none;
    }
  }
  .mypage-auth-sect {
    border: 1px solid green;
    width: 60%;
    .mypage-auth-button {
      margin: 5px;
      .btn-auth-42 {
        padding: 2pt 5pt;
        border: none;
        background-color: #53b7ba;
      }
    }
  }
`;

const MyPageLinkContainer = styled.div`
  width: 25%;
  border: 1px solid black;
`;

const MypageContainer = styled.div`
  background-color: white;
  box-shadow: 2px 5px 5px gray;
  margin: 10px;
  width: ${(props) => (props.windowWidth <= 960 ? "calc(100% - 20px)" : "70%")};
  height: ${(props) => (props.windowWidth <= 960 ? "30vh" : "40vh")};
  border-radius: 10px;
  h1 {
    margin: 5pt;
    height: ${(props) => (props.windowWidth <= 960 ? "30pt" : "40pt")};
    font-size: ${(props) => (props.windowWidth <= 960 ? "20pt" : "30pt")};
  }
  hr {
    margin: 0;
    padding: 0;
    color: #d8d8d8;
  }
  .mypage-section {
    margin: 5px;
    padding: 5px;
    display: flex;
    height: ${(props) =>
      props.windowWidth <= 960
        ? "calc(100% - 35pt - 25px)"
        : "calc(100% - 40pt - 25px)"};
  }
`;
//Line Color: lineGray3 (#d8d8d8)

const MypageBlock = styled(Container)`
  display: flex;
  flex-direction: column;
  border: 1px solid magenta;
`;

export default Mypage;
