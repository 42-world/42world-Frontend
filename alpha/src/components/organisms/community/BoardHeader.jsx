import { useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchIcon from "@mui/icons-material/Search";

import styled from "styled-components";

const BoardHeader = () => {
  const [search, setSearch] = useState("");
  const navi = useNavigate();

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    if (search === "") return;
    // console.log(search); // 검색 창으로 이동해야 함.
    navi(`/search?keyword=${search}`);
    setSearch("");
  };

  const handleChangeSearch = (e) => {
    setSearch(e.currentTarget.value);
  };
  const handleCreateArticle = () => {
    navi(`/write`);
  };

  return (
    <BoardHeaderDiv>
      <h2>자유게시판</h2>
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
        <button onClick={handleCreateArticle}>글쓰기</button>
      </div>
    </BoardHeaderDiv>
  );
};

export default BoardHeader;

const BoardHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;

  .side-box {
    display: flex;
    flex-direction: row;
  }
  .side-box > * {
    margin: 0.2em;
  }
  h2 {
    margin: 0.2em;
  }

  .input-box {
    border: 1px solid gray;

    display: flex;
    padding: 0.2em;
    border-radius: 1em;
    input {
      border: 0px;
    }
  }

  button {
    background: #53b7ba;
    color: #ffffff;
    border: 0px;
    padding: 0 0.7em 0 0.7em;
    border-radius: 1em;
    cursor: pointer;
  }
`;
