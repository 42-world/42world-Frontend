import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 300px;
  transform: translate(-50%, -50%);
  border-radius: 4px;
  background-color: #fff;
`;

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.85;
`;

export const ModalOutside = styled.div`
  position: fixed;
  display: grid;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.75);
  place-content: center;
  z-index: 1;
  .head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgb(34, 34, 34);
    font-size: 18px;
    font-weight: 700;
    padding: 23px 30px;
    border-bottom: solid 1px rgb(223, 225, 228);
    h5 {
      margin: 0;
    }
    .close-btn {
      width: 16px;
      height: 16px;
      cursor: pointer;
    }
  }
`;
