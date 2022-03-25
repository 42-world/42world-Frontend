import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import IconSet from "../atoms/Mypage";
import MypageData from "../../datas/mypage";

const MypageLink = ({ linkType, linkName, linkHref }) => {
  const icon =
    linkType === "github" ? (
      <IconSet.IconGithub />
    ) : linkType === "intra42" ? (
      <IconSet.Icon42 />
    ) : linkType === "linkedin" ? (
      <IconSet.IconLinkedIn />
    ) : linkType === "twitter" ? (
      <IconSet.IconTwitter />
    ) : linkType === "facebook" ? (
      <IconSet.IconFacebook />
    ) : undefined;
  return (
    <div className="mypage-link">
      <a href={linkHref}>{icon}</a>
      {linkName}
    </div>
  );
};

const MypageProfileSect = ({ profileImg, userName }) => {
  return (
    <MypageProfileContainer
      windowWidth={window.innerWidth}
      windowHeight={window.innerHeight}>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={profileImg} />
        <MypageButton>사진 변경</MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType="auth-42">42인증하기</MypageButton>
          <MypageButton>로그아웃</MypageButton>
        </div>
      </div>
    </MypageProfileContainer>
  );
};

const MyPageLinkSect = ({ links }) => {
  let arr = [];
  for (let i in links)
    arr.push(
      <MypageLink linkType={i} linkHref={links[i][0]} linkName={links[i][1]} />
    );

  return (
    <>
      <MyPageLinkContainer>{arr}</MyPageLinkContainer>
    </>
  );
};

const Mypage = () => {
  //MypageData 대신 props로 데이터 받아와야 함 (아마도)
  return (
    <MypageBlock>
      <MypageContainer windowWidth={window.innerWidth}>
        <h1>마이페이지</h1>
        <hr />
        <div className="mypage-section">
          <MypageProfileSect
            profileImg={MypageData.profilePhoto}
            userName={MypageData.userName}
          />
          <MyPageLinkSect links={MypageData.links} />
        </div>
      </MypageContainer>
      <div>게시물 영역</div>
    </MypageBlock>
  );
};

const MypageButton = styled.button`
  padding: 2pt 5pt;
  margin: 3px 5px;
  border: none;
  width: 60pt;
  font-size: 10pt;
  background-color: ${(props) =>
    props.btnType === "auth-42" ? "#53b7ba" : "#2a2d38"};
  color: white;
`;

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
  }
  .mypage-auth-sect {
    border: 1px solid green;
    width: 60%;
    h1 {
      font-size: ${(props) => (props.windowWidth <= 960 ? "20pt" : "30pt")};
      margin: ${(props) =>
        props.windowWidth < props.windowHeight ? "10px 5px" : "20px 5px"};
      border: 1px solid black;
    }
    .mypage-auth-button {
      margin: 10px 5px;
      border: 1px solid black;
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
