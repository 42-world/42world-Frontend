import React, { useState } from "react";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const handleSearch = () => {
    navigate(`/search/${search}`);
  };
  return (
    <WrapSearchbar onSubmit={handleSearch}>
      <SearchIcon size="26" />
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="관심있는 내용을 검색해보세요"
      />
    </WrapSearchbar>
  );
};

const WrapSearchbar = styled.form`
  margin: 40px 0 20px;
  width: 100%;
  & > input {
    display: block;
    padding: 0 10px 0 62px;
    width: inherit;
    height: 60px;
    font-size: 18px;
    border: 2px solid #222;
    border-radius: 30px;
    box-sizing: border-box;
  }
`;
//absolute는 margin으로 relative는 top,left등으로
const SearchIcon = styled(AiOutlineSearch)`
  position: absolute;
  margin-left: 20px;
  margin-top: 18px;
`;

export default SearchBar;
