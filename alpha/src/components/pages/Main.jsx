//import { useEffect, useState } from "react";
import styled from "styled-components";
import { rem } from "../../styles/rem";
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
    margin-top: ${rem(40)};
  }

  main {
    max-width: ${rem(768)};
  }

  aside {
    width: ${rem(240)};
    padding-left: ${rem(20)};

    @media screen and (max-width: 1100px) {
      display: none;
    }
  }

  .category-preview-container {
    display: flex;
    flex-wrap: wrap;

    margin-top: ${rem(20)};
    max-width: ${rem(768)};
  }
`;

export default Main;
