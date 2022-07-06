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

          <StyledSideSection>
            <QuickLink />
          </StyledSideSection>
        </StyledMainContent>
      </StyledMain>
    </>
  );
};

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
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  border-radius: 10px;
  margin-bottom: 20px;
  padding: 10px;
`;

export default Main;
