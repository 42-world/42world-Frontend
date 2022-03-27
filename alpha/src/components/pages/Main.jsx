//import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import { CategoryPreview } from "../organisms/main";
import { Searchbar } from "../organisms/main";
import { QuickLink } from "../organisms/main";
import { ClusterStatus } from "../organisms/main";

const categories = [
  { id: 0, name: "인기글" },
  { id: 1, name: "자유게시판" },
  { id: 2, name: "오늘 뭐 먹지" },
];

const Main = () => {
  // 카테고리 종류랄 받아오면
  return (
    <MainContainer>
      <main>
        <Searchbar />
        <div className="category-preview-container">
          {categories.map((category) => (
            <CategoryPreview key={category.id} title={category.name} />
          ))}
        </div>
      </main>
      <aside>
        <ClusterStatus />
        <QuickLink />
      </aside>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  justify-content: center;

  main,
  aside {
    margin-top: 4rem;
  }

  main {
    max-width: 76.8rem;
  }

  aside {
    width: 24rem;
    padding-left: 2rem;

    @media screen and (max-width: 1100px) {
      display: none;
      // opacity: 0;
      // width: 0;
      // padding-left: 0;
      // transition: opacity 1s;
    }
  }

  .category-preview-container {
    display: flex;
    flex-wrap: wrap;

    margin-top: 2rem;
    max-width: 76.8rem;
  }
`;

export default Main;
