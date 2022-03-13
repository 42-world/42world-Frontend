import axios from "axios";
import styled from "styled-components";

export const Instance = axios.create({ baseURL: "http://localhost:8080" });

export const Btn = styled.button`
  background-color: #bbc0c5;
  width: 100%;
  height: 48px;
  margin: 0 6px;
  font-size: 16px;
  font-weight: 400;
  color: #fff;
  border: none;
  &.confirm {
    background-color: #222;
  }
`;

//export default Instance;
