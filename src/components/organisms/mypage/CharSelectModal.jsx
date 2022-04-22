import styled from "styled-components";
import { Modal } from "@mui/material";

import { ModalContainer } from "../../atoms/Modal";
import profileUtils from "./utils/profileUtils";
import { UserService } from "../../../network";
import { useState } from "react";

const CharSelectModal = ({ ifOpen }) => {
  //const curUser = auth.curUser;
  const PICTURE_DIR = "/assets/CharacterWhiteBG/";
  const [charID, setCharID] = useState(0);

  /*
  const handleOnClick = async (id) => {
    await UserService.updateUser({ character: id });

    setCharID(id);
    // window.alert("캐릭터 변경 완료");
    console.log(charID);
    //auth.setIsLoading(true);
  };*/
  const handleOnClick = (e, id) => {
    e.preventDefault();
    setCharID(id);
    console.log(charID);
  };

  return (
    <Modal open={ifOpen}>
      <CharSelectContainer>
        <h1>캐릭터 선택</h1>
        <hr />
        <div className="char-list">
          {profileUtils.PROFILE_LIST.map((char) => (
            <div key={char.id} onClick={(e) => handleOnClick(e, char.id)}>
              <img
                className={char.id === charID ? "selected" : ""}
                alt="profile"
                src={PICTURE_DIR + char.image}
              />
            </div>
          ))}
        </div>
      </CharSelectContainer>
    </Modal>
  );
};

const CharSelectContainer = styled(ModalContainer)`
  width: 40%;
  height: fit-content;

  h1 {
    margin: 0.3rem 0.1rem 0.6rem 0.5rem;
    height: fit-content;
    font-size: 1.6rem;
  }
  hr {
    color: ${(props) => props.theme.LineGray1};
  }
  .char-list {
    display: flex;
    flex-direction: row;
    & > div {
      display: block;
    }
    img {
      width: 5rem;
      border: 2px solid black;
      &:not(.selected) {
        filter: brightness(50%);
      }
    }
  }
  ${(props) => props.theme.mobileSize} {
    width: 70%;
  }
`;

export default CharSelectModal;
