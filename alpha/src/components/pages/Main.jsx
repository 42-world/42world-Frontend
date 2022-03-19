import { useEffect, useState } from "react";
import styled from "styled-components";
//import { PostList } from "../organisms";
import {
  BestBoardCard,
  BoardCard,
  Searchbar,
  RealtimeFamousCompany,
} from "../organisms/main";

const Main = () => {
  return (
    <MainContainer>
      <main className="main-container">
        <Searchbar />
        {/* {mainContent
          .filter((v) => v.title === "오늘의 인기글")
          .map((b) => (
            <BestBoardCard
              key={b._id}
              title={b.title}
              slug={b.slug}
              articleList={b.content}
            />
          ))}
        <BoardCardContainer>
          {mainContent.map((b) => (
            <BoardCard
              key={b.slug}
              title={b.title}
              slug={b.slug}
              articleList={b.content}
            />
          ))}
        </BoardCardContainer> */}
      </main>
      <RealtimeFamousCompany />
    </MainContainer>
  );
};

const BoardCardContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 45px 40px;
`;

export const MainContainer = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1100px;
  main {
    width: 100%;
    max-width: 736px;
  }
`;

export default Main;
