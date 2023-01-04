import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const myArticleBoardWrapper = css`
  width: 100%;
  margin: 1rem 0;
  padding: 0.3rem;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};

  ${theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${theme.lineGray1};
    border-radius: 0;
    margin: 0;
  }
`;

export const myArticleBoardTitle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${theme.lineGray1};

  & > h1 {
    padding: 1rem 0.8rem;
    font-size: 1.4rem;
    font-weight: bold;
  }

  & > button {
    padding: 0.5rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;
