import React from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";

import { MyProfile } from "../organisms/mypage";
import { CategoryPreview, ClusterStatus, QuickLink } from "../organisms/main";

const Mypage = () => {
  //MypageData 대신 props로 데이터 받아와야 함 (아마도)
  return (
    <MypageBlock>
      <main>
        <MyProfile />
        <div className="mypage-article">
          {/*게시글 박스 컴포넌트 가져와서 심어야 할 부분*/}
          <CategoryPreview title="내 게시글" />
          <CategoryPreview title="내 댓글" />
        </div>
      </main>
      <aside>
        <ClusterStatus />
        <QuickLink />
      </aside>
    </MypageBlock>
  );
};

const MypageBlock = styled(Container)`
  justify-content: center;
  main {
    margin-top: 1.5rem;
    width: calc(100% - 0.5rem);
    display: flex;
    flex-direction: column;
    .mypage-article {
      display: flex;
      flex-wrap: wrap;
    }
  }
  aside {
    display: none;
  }
  @media screen and (min-width: 769px) {
    main {
      max-width: 48rem;
    }
  }
  @media screen and (min-width: 1101px) {
    aside {
      margin-top: 2.5rem;
    }
    aside {
      display: block;
      width: 15rem;
      padding-left: 1.25rem;
    }
  }
`;

export default Mypage;
