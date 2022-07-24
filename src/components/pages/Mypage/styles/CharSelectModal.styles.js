import styled from 'styled-components';

const StyledCharSelectModal = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 30%);
  backdrop-filter: blur(4px);

  .char-select-modal-container {
    position: fixed;
    width: 35rem;
    height: 25rem;
    top: calc(50% - 12.5rem);
    left: calc(50% - 17.5rem);
    background-color: ${props => props.theme.white};
    border: 2px solid ${props => props.theme.lineGray1};
    border-radius: ${props => props.theme.borderRadius};

    h2 {
      display: flex;
      padding: 0 1rem;
      height: 4rem;
      align-items: center;
      justify-content: flex-start;
      font-size: 1.6rem;
      font-weight: bold;
    }

    hr {
      color: ${props => props.theme.lineGray1};
    }

    ${props => props.theme.mobileSize} {
      width: 70%;
      height: 25rem;
      top: calc(50% - 12.5rem);
      left: 15%;
      width: 70%;
    }
  }

  .char-select-inner {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 0 1rem;
    height: calc(100% - 4rem);

    .char-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      max-height: 85%;
      overflow: auto;
      justify-content: center;
      padding: 0.3rem;

      button {
        border: none;
        background: none;
        padding: none;
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
          transition: filter 0.1s;

          &:hover {
            filter: brightness(70%);
          }
        }
      }
    }
  }
`;

export default StyledCharSelectModal;
