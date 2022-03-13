import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { getBoardArticleList, getBoardList } from "../../../apis/board";
import { BoardContainer } from "../../atoms/board";
import GlobalArticleCard from "../../organisms/GlobalArticleCard";

const _id = () => {
  const [boardList, setBoardList] = useState([]);
  const currentPath = decodeURI(useLocation().pathname);
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getBoardList();
      setBoardList(data);
    })();
    (async () => {
      const params = {
        slug: currentPath.split("/")[2],
      };
      const { article } = await getBoardArticleList(params);
      console.log(article);
      setArticleList(article);
    })();
  }, [currentPath]);

  return (
    <BoardContainer>
      <section className="board">
        {boardList.length > 0 &&
          boardList.map((b) => (
            <Link
              className={
                "board-item " +
                (currentPath === `/topics/${b.slug}` ? "active" : "")
              }
              to={`/topics/${b.slug}`}
            >
              {b.title}
            </Link>
          ))}
      </section>
      <section className="article-list">
        {articleList.map((a) => (
          <GlobalArticleCard article={a} key={a._id} />
        ))}
        {/* <infinite-loading @infinite="getBoardArticleList"></infinite-loading> */}
      </section>
    </BoardContainer>
  );
};

export default _id;
