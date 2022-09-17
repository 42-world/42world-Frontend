/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import { theme } from '@styles/theme';
import { isMobile } from 'react-device-detect';

import MobileDonation from './MobileDonation';
import DesktopDonation from './DesktopDonation';

const Donation = () => {
  return (
    <div css={DonationContainer}>
      <div css={DonationHeader}>
        <h1>42월드는 42서울 출신 개발자 10여명이 만들어가고 있는 사이트입니다.</h1>
        <h1>QR을 찍어 후원해주시면 개발자들에게 큰 힘이 됩니다.</h1>
      </div>
      {isMobile ? <MobileDonation /> : <DesktopDonation />}
    </div>
  );
};

export default Donation;

const DonationContainer = css`
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 2rem;
  padding-bottom: 10rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #eaeaea;
`;

const DonationHeader = css`
  margin: 40px;
  font-size: 26px;
  line-height: 30px;
  font-weight: bold;
  font-family: 'Noto Sans KR', sans-serif;
`;
