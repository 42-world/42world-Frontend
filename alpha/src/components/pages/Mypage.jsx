import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import MypageData from "../../datas/mypage";

const MypageProfileSect = () => {
  return (
    <MypageProfileContainer>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={MypageData.profilePhoto} />
        <button>사진 변경</button>
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
        <div>
          <MypageProfileSect />
          <MyPageLinkSect />
        </div>
      </MypageContainer>
      <div>게시물 역</div>
    </MypageBlock>
  );
};

const MypageProfileContainer = styled.div`
width: 70%;
border: 1px solid red;
.mypage-photo-sect {
  border: 1px solid blue;
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 40%;
    border: 2px solid black;
    border-radius: 50%;
  }
  button {
    margin: 5px 0px;
    width: 40%;
  }
`;

const MyPageLinkContainer = styled.div`
  width: 30%;
  border: 1px solid black;
`;

const MypageContainer = styled.div`
  background-color: white;
  box-shadow: 2px 5px 5px gray;
  margin: 10px;
  width: ${(props) => (props.windowWidth <= 960 ? "100% - 10px" : "70%")};
  height: ${(props) => (props.windowWidth <= 960 ? "30vh" : "40vh")};
  border-radius: 10px;
  h1 {
    margin: 5pt;
    height: ${(props) => (props.windowWidth <= 960 ? "35pt" : "40pt")};
    font-size: ${(props) => (props.windowWidth <= 960 ? "25pt" : "30pt")};
  }
  hr {
    margin: 0;
    padding: 0;
    color: #d8d8d8;
  }
  div {
    display: flex;
    height: 90%;
  }
`;
//Line Color: lineGray3 (#d8d8d8)

const MypageBlock = styled(Container)`
  display: flex;
  flex-direction: column;
  border: 1px solid magenta;
`;

export default Mypage;
