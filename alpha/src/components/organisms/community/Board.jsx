import { useEffect, useState } from "react";
import {
  // ArticleList,
  // ArticleTitle,
  // Body,
  // CountDisplay,
  // CountItem,
  // Head,
  // TitleSide,
  // Wrapper,
  BoardContainer
} from "../../atoms/Board";
import styled from "styled-components";

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(
      () =>
        resolve([
          {
            title: "success",
            content: "샘플 데이터",
            writer: "afs",
            createTime: "2022-03-24",
            viewCount: 124,
            likeCount: 16,
            commentCount: 4
          },
          {
            title: "success",
            content: "샘플 데이터",
            writer: "afs",
            createTime: "2022-03-24",
            viewCount: 124,
            likeCount: 16,
            commentCount: 4
          }
        ]),
      1000
    );
  });
};

const Board = () => {
  const [Articles, setArticles] = useState(null);

  const getArticles = async () => {
    const result = await getData();
    setArticles(result);
  };
  useEffect(() => {
    getArticles();
  }, []);
  return (
    <CommunityBlock>
      <div className="header">
        <h1>자유게시판</h1> <h2>검색</h2>
        <button>글 쓰기</button>
      </div>
      <BoardContainer>
        {Articles &&
          Articles.map(article => {
            return <div>{article.content}</div>;
          })}
      </BoardContainer>
    </CommunityBlock>
  );
};

const CommunityBlock = styled.div`
  .header {
    display: flex;
    flex-direction: row;
  }
`;

export default Board;
