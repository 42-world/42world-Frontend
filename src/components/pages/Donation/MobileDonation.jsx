/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import { theme } from '@styles/theme';

const MobileDonation = () => {
  const donationLink = [
    'supertoss://send?amount=500&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333210942896&origin=qr',
    'supertoss://send?amount=4242&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333210942896&origin=qr    ',
    'supertoss://send?amount=10000&bank=%EC%B9%B4%EC%B9%B4%EC%98%A4%EB%B1%85%ED%81%AC&accountNo=3333210942896&origin=qr    ',
  ];

  const moveQRLink = link => {
    window.open(link);
  };

  return (
    <div css={DonationBody}>
      {/* <div css={DonationImages}> */}
      <div css={DonationImage} onClick={() => moveQRLink(donationLink[0])}>
        <img src="/assets/donation/donation-paint1.png" />
        <text>❤500원 후원하기❤</text>
      </div>
      <div css={DonationImage} onClick={() => moveQRLink(donationLink[1])}>
        <img src="/assets/donation/donation-paint2.png" />
        <text>❤4,242원 후원하기❤</text>
      </div>
      <div css={DonationImage} onClick={() => moveQRLink(donationLink[2])}>
        <img src="/assets/donation/donation-paint3.png" />
        <text>❤10,000원 후원하기❤</text>
      </div>
      {/* </div> */}
      <text>클릭하면 이동합니다! 🖱️</text>
    </div>
  );
};

export default MobileDonation;

const DonationBody = css`
  display: flex;
  flex-direction: column;

  text {
    margin: 1rem;
    font-size: 1.5rem;
    font-weight: bold;
  }
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
