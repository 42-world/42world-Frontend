/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import BuyCoffee from './BuyCoffee';

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <address>
        <button>a</button>
        <button>b</button>
        <button>c</button>
      </address>
      <address>
        <BuyCoffee />
      </address>
      <p>
        © 2022. <strong css={strongText}>Team 42world</strong>
      </p>
    </footer>
  );
};

const footerStyle = css`
  display: flex;
  flex-direction: column;
  gap: 6px;

  margin-top: 16px;
  margin-bottom: 6px;

  text-align: center;
`;

const strongText = css`
  font-weight: bold;
`;

export default Footer;
