import React from 'react';
import styled from 'styled-components';

const SURVIVING42_URL = 'https://mimseong.github.io/Surviving_in_42';

const Advertisement = () => {
  return (
    <AdvertisementBlock>
      광고
      <a href={SURVIVING42_URL} target={'_blank'} rel="noreferrer">
        <img src="/assets/advertisement/surviving42.png" />
      </a>
    </AdvertisementBlock>
  );
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
