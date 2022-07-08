import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { isEmpty } from '@common/utils';
import { getCategory } from '@common/hooks/api/category';

const BoardHeader = ({ hasQuery }) => {
  const navigate = useNavigate();
  const param = useParams();
  const location = useLocation();
  const { categories } = getCategory();
  const [search, setSearch] = useState('');
  const categoryId = param?.id ? parseInt(param.id) : null;
  const categoryName = categories.find(c => c.id === categoryId)?.name;

  const handleSubmitSearch = e => {
    e.preventDefault();
    if (search === '') return;
    if (categoryId) {
      navigate(`/category/${categoryId}?q=${search}`);
    } else {
      navigate(`/category?q=${search}`);
    }
    setSearch('');
  };

  const handleChangeSearch = e => {
    setSearch(e.currentTarget.value);
  };

  const handleCreateArticle = () => {
    navigate(`/writing`, { state: { categoryId } });
  };

  const getTitle = () => {
    if (hasQuery) {
      return isEmpty(categoryName) ? '전체 게시판 검색 결과' : `${categoryName} 검색 결과`;
    }
    return isEmpty(categoryName) ? '' : categoryName;
  };

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
        <button onClick={handleCreateArticle}>글쓰기</button>
      </div>
    </BoardHeaderDiv>
  );
};

export default BoardHeader;

const BoardHeaderDiv = styled.div`
  padding: 5px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    background: #53b7ba;
    color: #ffffff;
    border: 0px;
    padding: 0 0.7rem 0 0.7rem;
    border-radius: 20px;
    cursor: pointer;
  }

  .title {
    font-size: 18px;
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
  font-size: 24px;
  font-weight: 700;
`;
