import { useEffect, useState } from "react";

import PreviewArticles from "./PreviewArticles";
import BoardHeader from "./BoardHeader";

// import { AiOutlineEye } from "react-icons/ai";

import { ArticleList, Body, Head, TitleSide, Wrapper } from "../../atoms/Board";
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
            commentCount: 4,
            id: 1,
          },
          {
            title: "success",
            content: "샘플 데이터",
            writer: "afs",
            createTime: "2022-03-24",
            viewCount: 124,
            likeCount: 16,
            commentCount: 4,
            id: 2,
          },
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
    <>
      <CommunityBlock>
        <Wrapper>
          {/* <Head> */}
          {/* <TitleSide> */}
          <div className="BoardHeaderWrapper">
            <BoardHeader />
          </div>
          {/* </TitleSide> */}
          {/* </Head> */}
          <Body>
            <ArticleList>
              {Articles &&
                Articles.map((article, id) => (
                  <PreviewArticles key={article.id} article={article} />
                ))}
            </ArticleList>
          </Body>
        </Wrapper>
      </CommunityBlock>
    </>
  );
};

const CommunityBlock = styled.div`
  //@media screen and (min-width: 960px) {
  //border: 1px solid black;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);

  .BoardHeaderWrapper {
    border-bottom: 1px solid #d8d8d8;
  }
  /* .header {
      display: flex;
      flex-direction: row;
    } */
  //}
`;

export default Board;
