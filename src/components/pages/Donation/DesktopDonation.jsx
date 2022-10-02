/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

const DesktopDonation = () => {
  return (
    <div css={DonationBody}>
      <div css={DonationImages}>
        <div css={DonationImage}>
          <img className="front" src="/assets/donation/donation-paint1.png" />
          <text>❤500원 후원하기❤</text>
        </div>
        <div css={DonationImage}>
          <img className="front" src="/assets/donation/donation-paint2.png" />
          <text>❤4,242원 후원하기❤</text>
        </div>
        <div css={DonationImage}>
          <img className="front" src="/assets/donation/donation-paint3.png" />
          <text>❤10,000원 후원하기❤</text>
        </div>
      </div>
    </div>
  );
};

export default DesktopDonation;

const DonationBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  text {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
`;

const DonationImages = css`
  display: flex;
  flex-direction: row;
`;

const DonationImage = css`
  display: flex;
  flex-direction: column;

  position: relative;
  margin: 10px;
  width: 300px;
  height: 300px;
  text-align: center;
  background-color: white;

  img {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
