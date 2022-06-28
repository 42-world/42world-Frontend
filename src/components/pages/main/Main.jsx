import styled from 'styled-components';
import QuickLink from 'common/QuickLink/QuickLink';
import MainPreviewBoards from './MainPreviewBoards';
import { FaSearch } from 'react-icons/fa';

const Main = () => {
  return (
    <>
      <StyledMain>
        <StyledMainContent>
          <StyledMainSection>
            <SearchForm>
              <FaSearch />
              <StyledInput type="text" placeholder="검색어를 입력해주세요" />
            </SearchForm>
            <MainPreviewBoards />
          </StyledMainSection>

          <StyledMainSection>
            <QuickLink />
          </StyledMainSection>
        </StyledMainContent>
      </StyledMain>
      <div>footer</div>
    </>
  );
};

const SearchForm = styled.form`
  color: white;
  display: flex;
  align-items: center;
  position: relative;
  svg {
    height: 25px;
    transform: translateX(45px);
    color: black;
  }
`;

const StyledMain = styled.div`
  display: flex;
`;

const StyledMainContent = styled.div`
  display: flex;
  margin: auto;
`;

const StyledMainSection = styled.div`
  margin: 10px;
`;

const StyledInput = styled.input`
  width: 800px;
  height: 50px;
  border-radius: 25px;
  margin: 10px;

  transform-origin: right center;
  padding: 5px 10px;
  padding-left: 40px;
  font-size: 16px;
  background-color: transparent;
  border: 2px solid black;
`;

export default Main;
