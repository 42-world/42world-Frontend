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
      <div css={DonationImages}>
        <div onClick={() => moveQRLink(donationLink[0])}>
          <img className="front" src="/assets/donation/donation-paint1.jpg" />
        </div>
        <div onClick={() => moveQRLink(donationLink[1])}>
          <img className="front" src="/assets/donation/donation-paint2.jpg" />
        </div>
        <div onClick={() => moveQRLink(donationLink[2])}>
          <img className="front" src="/assets/donation/donation-paint3.jpg" />
        </div>
      </div>
      <h1>클릭하면 이동합니다! 🖱️</h1>
    </div>
  );
};

export default MobileDonation;

const DonationBody = css`
  display: flex;
  flex-direction: column;

  h1 {
    margin-top: 1rem;

    font-size: 2rem;
    font-weight: bold;
  }
`;

const DonationImages = css`
  display: flex;
  flex-direction: column;

  div {
    position: relative;
    margin: 10px;
    width: 300px;
    height: 300px;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .front {
    z-index: 100;
  }
`;
