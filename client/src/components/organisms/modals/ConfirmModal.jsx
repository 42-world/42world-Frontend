import React from "react";
import styled from "styled-components";
import { Btn } from "../../../apis/index";
import { ModalOutside } from "../../atoms/modal";

const ConfirmModal = ({ title, closeConfirmModal, uploadArticle }) => {
  //console.log(title);
  return (
    <ModalOutside>
      <ConfirmModalWrapper>
        <div className="title">{title}</div>
        <div className="btn-container">
          <Btn className="cancel btn" onClick={closeConfirmModal}>
            취소
          </Btn>
          <Btn className="confirm btn" onClick={uploadArticle}>
            확인
          </Btn>
        </div>
      </ConfirmModalWrapper>
    </ModalOutside>
  );
};

const ConfirmModalWrapper = styled.div`
  width: 320px;
  padding: 24px;
  background: white;
  .btn-container {
    display: flex;
    margin-top: 30px;
  }
`;

export default ConfirmModal;
