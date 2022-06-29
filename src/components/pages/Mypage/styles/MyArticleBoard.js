import styled from 'styled-components';

const StyledMyArticleBoard = styled.div`
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: ${props => props.theme.boxShadow};

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    h1 {
      margin: 1rem 0.8rem;
      font-size: 1.4rem;
      font-weight: bold;
    }
    .go-back {
      margin: 0.5rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  .article-content {
    text-decoration: none;
    color: ${props => props.theme.black};
  }
  ${props => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default StyledMyArticleBoard;
