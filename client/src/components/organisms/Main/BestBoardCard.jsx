import React, { useEffect, useState } from "react";
import { FiThumbsUp } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { AiOutlineCrown } from "react-icons/ai";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  ArticleList,
  ArticleTitle,
  Body,
  CountDisplay,
  CountItem,
  Head,
  TitleSide,
  Wrapper,
} from "../../atoms/board";
import { getBoardList } from "../../../apis/board";

const BestBoardCard = ({ title, slug, articleList }) => {
  const [boardList, setBoardList] = useState({});

  //console.log(articleList);
  // useEffect(() => {
  //   (async () => {
  //     const data = await getBoardList();
  //     data.forEach((v) => {
  //       setBoardList({ ...boardList, [v._id]: v.title });
  //     });
  //   })();
  // }, []);
  return (
    <Wrapper>
      <Head>
        <TitleSide>
          <AiOutlineCrown size="30" />
          <h2>알럼 베스트</h2>
        </TitleSide>
        <Link to="/">더보기 +</Link>
      </Head>
      <Body>
        <ArticleList>
          {articleList.map((a) => (
            <li key={a.id + a.slug}>
              <ArticleTitle>
                {/* <BoardTag>{boardList[a.board]}</BoardTag> */}
                <span>{a.title}</span>
              </ArticleTitle>
              <CountDisplay>
                <CountItem>
                  <FiThumbsUp size="16" className="icon" />
                  <span>{a.thumbupCount}</span>
                </CountItem>
                <CountItem>
                  <BiComment size="16" className="icon" />
                  <span>{a.commentCount}</span>
                </CountItem>
              </CountDisplay>
            </li>
          ))}
        </ArticleList>
      </Body>
    </Wrapper>
  );
};

const BoardTag = styled.span`
  position: relative;
  top: -2px;
  margin-right: 6px;
  padding: 2px;
  font-size: 12px;

  color: #94969b;
  border: solid 1px #94969b;
`;

export default BestBoardCard;
