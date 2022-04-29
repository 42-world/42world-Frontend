import React from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../atoms/global";
import { QuickLink } from "../organisms/main";
import {
  MyProfile,
  MyArticlePreview,
  MyArticleBoard,
} from "../organisms/mypage";

const Mypage = () => {
  const loc = useLocation();
  const isArticle = loc.pathname.split("/")[2];
  return (
    <>
      <MypageBlock>
        <main>
          {isArticle ? (
            <MyArticleBoard
              isComment={isArticle === "article" ? false : true}
            />
          ) : (
            <>
              <MyProfile />
              <div className="mypage-article">
                <MyArticlePreview isComment={false} />
                <MyArticlePreview isComment={true} />
              </div>
            </>
          )}
        </main>
        <aside>
          <QuickLink />
        </aside>
      </MypageBlock>
    </>
  );
};

const MypageBlock = styled(Container)`
  justify-content: center;
  main {
    margin-top: 1.5rem;
    max-width: 48rem;
    display: flex;
    flex-direction: column;
    .mypage-article {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
    }
  }
  aside {
    display: none;
  }
  ${(props) => props.theme.mobileSize} {
    main {
      width: 100%;
      margin-top: 0;
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
