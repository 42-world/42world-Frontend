//import { useEffect, useState } from "react";
import styled from "styled-components";
import { Container } from "../atoms/global";
import CategoryPreview from "../organisms/CategoryPreview";
import { Searchbar } from "../organisms/main";

const categories = [
  { id: 0, name: "인기글" },
  { id: 1, name: "자유게시판" },
  { id: 2, name: "오늘 뭐 먹지" },
];

const Main = () => {
  // 카테고리 종류랄 받아오면
  return (
    <MainContainer>
      <main className="main-container">
        <Searchbar />
        <div className="category-preview-container">
          {categories.map((category) => (
            <CategoryPreview key={category.id} title={category.name} />
          ))}
        </div>
      </main>
    </MainContainer>
  );
};

const MainContainer = styled(Container)`
  width: 76.8rem;
  .category-preview-container {
    display: flex;
    flex-wrap: wrap;

    max-width: 76.8rem;
  }
`;

export default Main;
