import styled from 'styled-components';

const StyledMyArticlePageSelector = styled.div`
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
`;

export default StyledMyArticlePageSelector;
