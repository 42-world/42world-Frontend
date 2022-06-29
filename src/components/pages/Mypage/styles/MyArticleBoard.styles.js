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
      padding: 1rem 0.8rem;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .go-back {
      padding: 0.5rem;
      border: none;
      background: transparent;
      cursor: pointer;
    }
  }

  .article-content {
    text-decoration: none;
    color: ${props => props.theme.black};
  }

  .page-selector {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.3rem;
    margin-top: 0.3rem;
    background-color: ${props => props.theme.backgroundWhite};

    button {
      border: none;
      background-color: ${props => props.theme.backgroundWhite};
      color: ${props => props.theme.textBlack};
      padding: 0.3rem 0.5rem;
      margin: 0.2rem;
      border-radius: 0.3rem;
    }
    .cur-page {
      background-color: ${props => props.theme.primary};
      color: ${props => props.theme.textWhite};
    }
  }

  ${props => props.theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${props => props.theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export default StyledMyArticleBoard;
