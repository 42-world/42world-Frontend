import React from "react";
import styled from "styled-components";

const Advertisement = () => {
  return <CommunityBlock>광고</CommunityBlock>;
};

const CommunityBlock = styled.div`
  height: 540px;
  width: 9rem;
  min-width: 9rem;
  margin: 0 0.8rem;
  border-radius: 5px;
  background-color: var(--primary-point);
  @media screen and (max-width: 1020px) {
    display: none;
  }
`;

export default Advertisement;
