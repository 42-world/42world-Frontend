import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import IconSet from "../atoms/Mypage";
import MypageData from "../../datas/mypage";
import { CategoryPreview } from "../organisms/main";

const MypageProfileSect = ({ profileImg, userName }) => {
  return (
    <MypageProfileContainer
      windowWidth={window.innerWidth}
      windowHeight={window.innerHeight}>
      <div className="mypage-photo-sect">
        <img alt="테스트" src={profileImg} />
        <MypageButton windowWidth={window.innerWidth}>사진 변경</MypageButton>
      </div>
      <div className="mypage-auth-sect">
        <h1>{userName}</h1>
        <div className="mypage-auth-button">
          <MypageButton btnType="auth-42" windowWidth={window.innerWidth}>
            42인증
          </MypageButton>
          <MypageButton windowWidth={window.innerWidth}>로그아웃</MypageButton>
        </div>
      </div>
    </MypageProfileContainer>
  );
};

const MypageLinkSect = ({ links }) => {
  const GetIcon = (linkType) => {
    return linkType === "github" ? (
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
  };

  const handleOnClick = (e, linkHref) => {
    e.preventDefault();
    console.log("clicked");
    console.log(linkHref); //링크 누르면 이동하도록 수정
  };

  let arr = [];
  for (let i in links)
    arr.push(
      <div
        className="mypage-link"
        key={i}
        onClick={(e) => handleOnClick(e, links[i][0])}>
        {GetIcon(i)}
        <span>{links[i][1]}</span>
      </div>
    );

  return (
    <MypageLinkContainer windowWidth={window.innerWidth}>
      {arr}
    </MypageLinkContainer>
  );
};

const Mypage = () => {
  //MypageData 대신 props로 데이터 받아와야 함 (아마도)
  return (
    <MypageBlock windowWidth={window.innerWidth}>
      <div className="mypage-left">
        <MypageProfile windowWidth={window.innerWidth}>
          <h1>마이페이지</h1>
          <hr />
          <div className="mypage-section">
            <MypageProfileSect
              profileImg={MypageData.profilePhoto}
              userName={MypageData.userName}
            />
            <MypageLinkSect links={MypageData.links} />
          </div>
        </MypageProfile>
        <div className="mypage-article">
          {/*게시글 박스 컴포넌트 가져와서 심어야 할 부분*/}
          <CategoryPreview title="내 게시글" />
          <CategoryPreview title="내 댓글" />
        </div>
      </div>
      <div className="mypage-right">나머지</div>
    </MypageBlock>
  );
};

const MypageButton = styled.button`
  padding: 2pt 5pt;
  margin: 3px 0;
  border: none;
  width: ${(props) =>
    props.windowWidth <= 640
      ? "80%"
      : props.windowWidth <= 360
      ? "100%"
      : "40%"};
  height: ${(props) =>
    props.windowWidth <= 640
      ? "fit-content"
      : props.windowWidth <= 960
      ? "20pt"
      : "25pt"};
  font-size: ${(props) =>
    props.windowWidth <= 960
      ? "8pt"
      : props.windowWidth <= 1280
      ? "10pt"
      : "15pt"};
  background-color: ${(props) =>
    props.btnType === "auth-42" ? props.theme.primary : props.theme.secondary};
  color: white;
`;

const MypageProfileContainer = styled.div`
  width: ${(props) => (props.windowWidth <= 960 ? "65%" : "75%")};
  display: flex;
  align-items: center;
  .mypage-photo-sect {
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow: auto;
    img {
      ${(props) =>
        props.windowWidth <= 450
          ? "width: 55%"
          : props.windowWidth <= 550
          ? "width: 50%"
          : "height: 50%"};
      border: 2px solid black;
      border-radius: 50%;
      margin-bottom: 5px;
    }
  }
  .mypage-auth-sect {
    width: 60%;
    h1 {
      display: flex;
      align-items: center;
      font-size: ${(props) => (props.windowWidth <= 960 ? "20px" : "30px")};
      text-overflow: ellipsis;
      margin: ${(props) =>
        props.windowWidth < props.windowHeight
          ? "5px 5px 5px 8px"
          : "20px 5px 20px 5px"};
    }
    .mypage-auth-button {
      margin: ${(props) =>
        props.windowWidth < props.windowHeight
          ? "5px 5px 5px 8px"
          : "20px 5px 20px 5px"};
      button {
        margin-right: 5px;
      }
    }
  }
`;

const MypageLinkContainer = styled.div`
  width: ${(props) => (props.windowWidth <= 960 ? "35%" : "25%")};
  border-left: 1px solid #d8d8d8;
  font-size: 5%;
  padding: 5px;
  .mypage-link {
    height: 20pt;
    padding: 0 0 0 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 3px;
      width: ${(props) => (props.windowWidth <= 960 ? "10pt" : "15pt")};
    }
    span {
      overflow: auto;
      font-size: 10pt;
      display: inline-block;
      margin: 0 3px;
    }
  }
`;

const MypageProfile = styled.div`
  background-color: white;
  box-shadow: ${(props) => props.theme.boxShadow};
  margin: 10px;
  width: calc(100% - 20px)
  height: ${(props) => (props.windowWidth <= 960 ? "30vh" : "40vh")};
  border-radius: ${(props) => props.theme.borderRadius};
  h1 {
    margin: 5pt;
    margin-left: ${(props) => (props.windowWidth <= 960 ? "10px" : "20px")};
    height: ${(props) => (props.windowWidth <= 960 ? "30pt" : "40pt")};
    font-size: ${(props) => (props.windowWidth <= 960 ? "20pt" : "30pt")};
  }
  hr {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.LineGray1};
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

const MypageBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  .mypage-left {
    width: ${(props) => (props.windowWidth <= 960 ? "100%" : "70%")};
    display: flex;
    flex-direction: column;
    .mypage-article {
      width: 100%;
      height: 400px;
      display: flex;
      margin-top: 10px;
      flex-direction: ${(props) =>
        props.windowWidth <= 960 ? "column" : "row"};
    }
  }
  .mypage-right {
    display: ${(props) => (props.windowWidth <= 960 ? "none" : "inline")};
    width: calc(30% - 10px);
    margin: 5px;
    background-color: gray;
  }
`;

export default Mypage;
