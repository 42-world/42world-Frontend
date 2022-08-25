/** @jsxImportSource @emotion/react */

import { css, keyframes } from '@emotion/react';
import { theme } from '@styles/theme';

const DesktopDonation = () => {
  return (
    <div css={DonationBody}>
      <div css={DonationImages}>
        <div>
          <img className="front" src="/assets/donation/donation-paint1.jpg" />
          <img className="back" src="/assets/donation/donation1.png" />
        </div>
        <div>
          <img className="front" src="/assets/donation/donation-paint2.jpg" />
          <img className="back" src="/assets/donation/donation2.png" />
        </div>
        <div>
          <img className="front" src="/assets/donation/donation-paint3.jpg" />
          <img className="back" src="/assets/donation/donation3.png" />
        </div>
      </div>

      <h1>마우스를 올려보세요! 🖱️</h1>
    </div>
  );
};

export default DesktopDonation;

const RotateAnimation = keyframes`
0% {
  tansform: rotateY(0deg);
}
1% {
  transform: rotateY(180deg);
z-index: -100;
 
}
100% {
  transform: rotateY(180deg);
}
`;

const DonationBody = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-top: 1rem;

    font-size: 2rem;
    font-weight: bold;
  }
`;

const DonationImages = css`
  display: flex;
  flex-direction: row;
  div {
    position: relative;
    margin: 10px;
    width: 400px;
    height: 400px;
  }
  img {
    position: relative;
    width: 100%;
    height: 100%;
  }

  .front {
    z-index: 100;
    &:hover {
      animation: ${RotateAnimation} 100s ease 1;
    }
  }
  .back {
    z-index: 5;
    height: 390px;
    top: -400px;
  }
`;
