import styled from 'styled-components';
import QuickLink from 'common/QuickLink/QuickLink';
import MainPreviewBoards from './MainPreviewBoards';

const Main = () => {
  return (
    <>
      <StyledMain>
        <StyledMainContent>
          <StyledMainSection>
            <StyledInput type="text" placeholder="검색어를 입력해주세요" />
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
  width: 800px; // TODO: reactive width
  height: 40px;
  border-radius: 10px;
  margin: 10px;
  padding: 10px;
`;

export default Main;
