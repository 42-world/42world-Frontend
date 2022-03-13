import { React, useEffect, useState } from "react";
import styled from "styled-components";
import { getSearchArticle } from "../../../apis/search";
import { BoardContainer } from "../../atoms/board";
import { useLocation } from "react-router-dom";
import GlobalArticleCard from "../../organisms/GlobalArticleCard";

const _query = () => {
  const [articleList, setArticleList] = useState([]);
  const query = decodeURI(useLocation().pathname).split("/")[2];

  useEffect(() => {
    console.log(query);
    setTimeout(async () => {
      const params = {
        query: query,
      };
      const { article } = await getSearchArticle(params);
      console.log(article);
      setArticleList(article);
    }, 600);
  }, []);
  return (
    <BoardContainer>
      <section>
        <strong>{query}</strong>
        검색결과
      </section>
      <section className="total">전체({articleList.length})</section>
      <section className="article-list">
        {articleList.map((a) => (
          <GlobalArticleCard article={a} key={a._id} />
        ))}
      </section>
    </BoardContainer>
  );
};

export default _query;
