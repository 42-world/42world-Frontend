import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';

import useArticleListHeader from '@components/pages/articles/ArticleListPage/hooks/useArticleListHeader';

const ArticleListHeader = ({ hasQuery }) => {
  const { search, isWriteable, getTitle, handleChangeSearch, handleCreateArticle, handleSubmitSearch } =
    useArticleListHeader(hasQuery);

  return (
    <BoardHeaderDiv>
      <Title>{getTitle()}</Title>
      <div className="side-box">
        <form onSubmit={handleSubmitSearch}>
          <div className="input-box">
            <SearchIcon />
            <input
              onChange={handleChangeSearch}
              type="text"
              className="search"
              value={search}
              placeholder="게시물 제목 검색"
            />
          </div>
        </form>
        {isWriteable ? <button onClick={handleCreateArticle}>글쓰기</button> : <></>}
      </div>
    </BoardHeaderDiv>
  );
};

export default ArticleListHeader;

const BoardHeaderDiv = styled.div`
  padding: 0.4rem 0.9rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  border-bottom: 0.1rem solid #d8d8d8;

  button {
    background: #53b7ba;
    color: #ffffff;
    border: 0px;
    padding: 0 0.7rem;
    border-radius: 20px;
    cursor: pointer;
  }

  .side-box {
    display: flex;
    flex-direction: row;
    margin: 0.2rem;
    .input-box {
      max-width: 16rem;
      border: 1px solid #dbdbdb;
      display: flex;
      padding: 0.2rem;
      border-radius: 1rem;
      margin-right: 0.7rem;
      color: black;
      input {
        font-size: 14px;
        width: 100%;
        margin-right: 0.5rem;
        border: 0px;
        &::placeholder {
          color: #dee2e6;
        }
      }
    }
  }
`;

const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: 800;
`;
