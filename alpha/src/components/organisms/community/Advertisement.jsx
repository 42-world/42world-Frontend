import React from "react";
import styled from "styled-components";

const Advertisement = () => {
  return <CommunityBlock>광고</CommunityBlock>;
};

const CommunityBlock = styled.div`
  @media screen and (min-width: 960px) {
    height: 840px;
    width: 154px;
    margin-top: 10px;
    border-radius: 5px;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background-color: var(--primary-point);
  }
  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export default Advertisement;
