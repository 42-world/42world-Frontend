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
      <div className="mypage-photo-sect">bye</div>
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
    </MypageBlock>
  );
};

const MypageProfileContainer = styled.div`
width: 70%;
border: 1px solid red;
.mypage-photo-sect {
  border: 1px solid blue;
  width: 50%;
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

const MypageContainer = styled.div`
  background-color: white;
  box-shadow: 2px 5px 5px gray;
  margin: 10px;
  width: ${(props) => (props.windowWidth <= 960 ? "100vw" : "30vw")};
  height: 40vh;
  border-radius: 10px;
  h1 {
    margin: 1% 2%;
    height: 10%;
    display: inline-block;
    vertical-align: middle;
    font-size: ${(props) => (props.windowWidth <= 960 ? "25pt" : "30pt")};
  }
  hr {
    margin: 0;
    padding: 0;
  }
  div {
    display: flex;
    }
    div:nth-child(2) {
      width: 30%;
      border: 1px solid black;
    }
  }
`;

const MypageBlock = styled(Container)``;

export default Mypage;
