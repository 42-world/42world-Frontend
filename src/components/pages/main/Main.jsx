import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import QuickLink from '@common/QuickLink/QuickLink';
import MainPreviewBoards from './MainPreviewBoards';

import { theme } from '@root/styles/theme';

const Main = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');

  const onSubmit = () => {
    // TODO: 빈문자열 엔터치면 기부페이지로 이동
    navigate(`/category?q=${inputValue}`);
  };

  const onChange = e => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <StyledMain>
        <StyledMainContent>
          <StyledMainSection>
            <SearchForm onSubmit={onSubmit}>
              <FaSearch />
              <StyledInput type="text" placeholder="검색어를 입력해주세요" onChange={onChange} value={inputValue} />
            </SearchForm>
            <MainPreviewBoards />
          </StyledMainSection>

          <StyledSideSection>
            <QuickLink />
          </StyledSideSection>
        </StyledMainContent>
      </StyledMain>
    </>
  );
};

const SearchForm = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  border: 2px solid black;
  border-radius: 25px;
  padding: 0 15px;
  margin-bottom: 1rem;

  svg {
    height: 25px;
    color: black;
  }
`;

const StyledMain = styled.div`
  display: flex;
`;

const StyledMainContent = styled.div`
  display: flex;
  margin: auto;
  margin-top: 1rem;
  width: 100%;
  max-width: 1150px;
  flex-direction: row;
  justify-content: space-between;
  ${theme.mobileSize} {
    margin-top: 0;
  }
`;

const StyledMainSection = styled.div`
  width: 100%;
  margin: 10px;
`;

const StyledSideSection = styled.div`
  ${props => props.theme.mobileSize} {
    display: none;
  }
  margin: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 40px;

  transform-origin: right center;
  padding: 5px 10px;
  font-size: 16px;
  background-color: transparent;
  border: none;
  outline: none;
`;

export default Main;
