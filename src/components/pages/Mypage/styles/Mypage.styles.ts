import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const mypageWrapper = css`
  display: flex;
  justify-content: center;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
`;

export const mainWrapper = css`
  width: 100%;
  margin-top: 1.5rem;
  max-width: 48rem;
  display: flex;
  flex-direction: column;

  ${theme.mobileSize} {
    width: 100%;
    margin-top: 0;
  }
`;

export const asideWrapper = css`
  display: none;

  @media screen and (min-width: 1101px) {
    display: block;
    margin-top: 2.5rem;
    width: 15rem;
    padding-left: 1.25rem;
  }
`;
