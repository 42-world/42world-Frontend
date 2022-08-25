/** @jsxImportSource @emotion/react */

import styled from 'styled-components';
import { css, keyframes } from '@emotion/react';

const Donation = () => {
  return (
    <div css={DonationContainer}>
      <div css={DonationHeader}>
        <h1>42월드는 42서울 출신 개발자 10여명이 만들어가고 있는 사이트입니다.</h1>
        <h1>QR을 찍어 후원해주시면 개발자들에게 큰 힘이 됩니다.</h1>
      </div>
      <div css={DonationBody}>
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

const DonationBody = css`
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
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

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
