/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';
import { FaJava } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BuyCoffee = () => {
  return (
    <Link to={'/donation'}>
      <div css={divStyle}>
        개발자 커피사주기 <FaJava />
      </div>
    </Link>
  );
};

const divStyle = css`
  display: inline-block;

  padding: 0.1rem 1.2rem;

  border: none;
  border-radius: 4px;

  font-weight: bold;

  background-color: ${theme.buttonYello};
  color: ${theme.black};

  cursor: pointer;
`;

export default BuyCoffee;
