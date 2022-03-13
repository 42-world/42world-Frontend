import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  ArticleList,
  ArticleTitle,
  BoardIcon,
  BoardLink,
  Body,
  CountItem,
  Head,
  TitleSide,
  Wrapper,
} from "../../atoms/board";
import { FiThumbsUp } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import { AiOutlineEye } from "react-icons/ai";

const BoardCard = ({ title, slug, articleList }) => {
  return (
    <Wrapper>
      <Head>
        <TitleSide>
          <BoardIcon></BoardIcon>
          <h2>{title}</h2>
        </TitleSide>
        <BoardLink to={`/topics/${slug}`}>더보기 +</BoardLink>
      </Head>
      <Body>
        <ArticleList>
          {articleList.map((a, id) => (
            <li key={a.title + id}>
              <ArticleTitle>{a.title}</ArticleTitle>
              <CountItem>
                <AiOutlineEye size="16" className="icon" />
                <span>{a.viewCount}</span>
              </CountItem>
            </li>
          ))}
        </ArticleList>
      </Body>
    </Wrapper>
  );
};

export default BoardCard;
