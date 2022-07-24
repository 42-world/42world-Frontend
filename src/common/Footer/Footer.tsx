/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import BuyCoffee from './BuyCoffee';
import { BsGithub } from 'react-icons/bs';
import { FiMail } from 'react-icons/fi';
import { theme } from '@root/styles/theme';

const GITHUB_URL = 'https://github.com/42-world';
const EMAIL = '42world.official@gmail.com';

const Footer = () => {
  return (
    <footer css={footerStyle}>
      <address css={iconAddressStyle}>
        <a href={GITHUB_URL} target={'_blank'} rel="noreferrer">
          <BsGithub css={iconColor} size={20} />
        </a>
        <a href={`mailto:${EMAIL}`}>
          <FiMail css={iconColor} size={20} />
        </a>
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
  gap: 12px;

  margin-top: 16px;
  margin-bottom: 6px;

  text-align: center;
`;

const iconAddressStyle = css`
  display: flex;
  justify-content: center;
  gap: 12px;
`;

const iconColor = css`
  color: ${theme.backgroundBlack};
`;

const strongText = css`
  font-weight: bold;
`;

export default Footer;
