import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import { MyProfile } from "../organisms/mypage";

import IconSet from "../atoms/Mypage";
import MypageData from "../../datas/mypage";
import { CategoryPreview } from "../organisms/main";

const Mypage = () => {
  //MypageData 대신 props로 데이터 받아와야 함 (아마도)
  return (
    <MypageBlock>
      <div className="mypage-left">
        <MyProfile />
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

const MypageBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  padding: 0.3rem;
  .mypage-left {
    width: 100%;
    display: flex;
    flex-direction: column;
    .mypage-article {
      width: 100%;
      height: 400px;
      display: flex;
      margin-top: 10px;
      flex-direction: column;
    }
  }
  .mypage-right {
    display: none;
    background-color: gray;
  }
  @media screen and (min-width: 769px) {
    .mypage-left {
      width: 70%;
      .mypage-article {
        border: 1px solid black;
        flex-direction: row;
      }
    }
    .mypage-right {
      display: block;
      width: 30%;
    }
  }
`;

export default Mypage;
