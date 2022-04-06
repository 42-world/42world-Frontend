import React from "react";
import styled from "styled-components";

const MypageButton = styled.button`
  padding: 2pt 5pt;
  margin: 3px 0;
  border: none;
  width: ${(props) =>
    props.windowWidth <= 640
      ? "80%"
      : props.windowWidth <= 360
      ? "100%"
      : "40%"};
  height: ${(props) =>
    props.windowWidth <= 640
      ? "fit-content"
      : props.windowWidth <= 960
      ? "20pt"
      : "25pt"};
  font-size: ${(props) =>
    props.windowWidth <= 960
      ? "8pt"
      : props.windowWidth <= 1280
      ? "10pt"
      : "15pt"};
  background-color: ${(props) =>
    props.btnType === "auth-42" ? props.theme.primary : props.theme.secondary};
  color: white;
`;

export default MypageButton;
