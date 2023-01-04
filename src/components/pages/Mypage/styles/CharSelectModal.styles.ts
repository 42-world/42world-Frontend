import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const charSelectModalWrapper = css`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 5;
  background-color: rgba(0, 0, 0, 30%);
  backdrop-filter: blur(4px);
`;

export const charSelectModalContainer = css`
  position: fixed;
  width: 35rem;
  height: 25rem;
  top: calc(50% - 12.5rem);
  left: calc(50% - 17.5rem);
  background-color: ${theme.white};
  border: 2px solid ${theme.lineGray1};
  border-radius: ${theme.borderRadius};

  & > h2 {
    display: flex;
    padding: 0 1rem;
    height: 4rem;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.6rem;
    font-weight: bold;
  }

  & > hr {
    color: ${theme.lineGray1};
  }

  ${theme.mobileSize} {
    width: 70%;
    height: 25rem;
    top: calc(50% - 12.5rem);
    left: 15%;
    width: 70%;
  }
`;

export const charSelectInnerContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 1rem;
  height: calc(100% - 4rem);
`;

export const charSelectList = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-height: 85%;
  overflow: auto;
  justify-content: center;
  padding: 0.3rem;
`;
