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
    <CommunityBlock>
      <Wrapper>
        {/* <Head> */}
        {/* <TitleSide> */}
        <BoardHeader />
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
  );
};

const CommunityBlock = styled.div`
  border: 1px solid black;
  margin: 1em;
  width: 90%;
  .header {
    display: flex;
    flex-direction: row;
  }
`;

export default Board;
