import styled from "styled-components";

const MyArticlePageSelector = ({ curPage, setCurPage, pageCount }) => {
  const handleClickPrevBtn = () => {
    setCurPage(1);
  };

  const handleClickNextBtn = () => {
    setCurPage(pageCount);
  };

  const getPageList = () => {
    const pageList = [];
    if (pageCount < 5) {
      for (let i = 1; i <= pageCount; i++) {
        pageList.push(i);
      }
    } else if (curPage > 2 && curPage < pageCount - 2) {
      for (let i = curPage - 2; i <= curPage + 2; i++) {
        pageList.push(i);
      }
    } else if (curPage <= 3) {
      for (let i = 1; i <= 5; i++) {
        pageList.push(i);
      }
    } else if (curPage >= pageCount - 3) {
      for (let i = pageCount - 4; i <= pageCount; i++) {
        pageList.push(i);
      }
    }
    console.log(pageCount);
    return pageList;
  };

  return (
    <MyArticlePageSelectorWrapper>
      <button onClick={handleClickPrevBtn}>&lt;</button>
      {getPageList().map((page) => {
        if (page === curPage) {
          return (
            <button
              key={page}
              onClick={() => setCurPage(page)}
              className="cur-page">
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
      <button onClick={handleClickNextBtn}>&gt;</button>
    </MyArticlePageSelectorWrapper>
  );
};

const MyArticlePageSelectorWrapper = styled.div`
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
  .cur-page {
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.textWhite};
  }
`;

export default MyArticlePageSelector;
