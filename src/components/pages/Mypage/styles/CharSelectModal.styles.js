import styled from 'styled-components';

const StyledCharSelectModal = styled.div`
  width: 40%;

  &:focus {
    outline: none;
    border: none;
  }

  h2 {
    margin: 0.6rem 0.1rem 0.6rem 0.5rem;
    font-size: 1.6rem;
  }
  hr {
    color: ${props => props.theme.LineGray1};
  }
  & > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.5rem;

    .char-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      padding: 0.3rem;

      button {
        display: block;
        margin: 0.3rem;
        &:hover {
          cursor: pointer;
        }
      }

      img {
        width: 5rem;
        border: 2px solid black;
        border-radius: 4px;
        &:not(.selected) {
          filter: brightness(50%);
        }
      }
    }
  }
  ${props => props.theme.mobileSize} {
    width: 70%;
  }
`;

export default StyledCharSelectModal;
