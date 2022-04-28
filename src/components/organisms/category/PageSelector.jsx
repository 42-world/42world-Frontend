import { useEffect, useState } from "react";
import PreviewArticle from "./PreviewArticle";
import BoardHeader from "./BoardHeader";
import { ArticleList, Body, Wrapper } from "../../atoms/Board";
import styled from "styled-components";
import { ArticleService } from "../../../network";

const PageSelector = ({ curPage, setCurPage, categoryId, articleCount }) => {
  const [totalPageCount, setTotalPageCount] = useState(null);

  useEffect(() => {
    (async () => {
      const meta = await ArticleService.getArticleMetaDataByCategoryId(
        categoryId,
        articleCount
      );
      setTotalPageCount(meta.pageCount);
    })();
    // eslint-disable-next-line
  }, [curPage, categoryId, articleCount, totalPageCount]);

  const getPageList = () => {
    const pageList = [];
    if (curPage > 2 && curPage < totalPageCount - 2) {
      for (let i = curPage - 2; i <= curPage + 2; i++) {
        pageList.push(i);
      }
    } else if (curPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageList.push(i);
      }
    } else if (curPage >= totalPageCount - 3) {
      for (let i = totalPageCount - 4; i <= totalPageCount; i++) {
        pageList.push(i);
      }
    }
    console.log(totalPageCount);
    return pageList;
  };

  return (
    <PageSelectorBlock>
      <button onClick={() => setCurPage(1)}>&lt;</button>
      {getPageList().map((page) => {
        if (page === curPage) {
          return (
            <button
              key={page}
              onClick={() => setCurPage(page)}
              className="curPage"
            >
              {page}
            </button>
          );
        } else {
          return (
            <button key={page} onClick={() => setCurPage(page)}>
              {page}
            </button>
          );
        }
      })}
      <button onClick={() => setCurPage(totalPageCount)}>&gt;</button>
      {/*<h1>a</h1>
      <h1>a</h1>*/}
    </PageSelectorBlock>
  );
};

const PageSelectorBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.backgroundWhite};

  button {
    border: none;
    background-color: ${(props) => props.theme.backgroundWhite};
    color: ${(props) => props.theme.textBlack};
    padding: 0.3rem 0.5rem;
    margin: 0.2rem;
    border-radius: 0.3rem;
  }
  .curPage {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textWhite};
  }
`;

export default PageSelector;
