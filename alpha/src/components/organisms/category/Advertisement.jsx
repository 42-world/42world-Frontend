import React from "react";
import styled from "styled-components";

const Advertisement = () => {
  return <AdvertisementBlock>광고</AdvertisementBlock>;
};

const AdvertisementBlock = styled.div`
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
