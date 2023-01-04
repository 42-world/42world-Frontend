import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const pageSelectorWrapper = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 0.3rem;
  margin-top: 0.3rem;
  background-color: ${theme.backgroundWhite};
`;

export const pageSelectorButton = (isCurrentPage: boolean) => css`
  border: none;
  background-color: ${theme.backgroundWhite};
  color: ${theme.textBlack};
  padding: 0.3rem 0.5rem;
  margin: 0.2rem;
  border-radius: 0.3rem;

  &:hover {
    cursor: pointer;
  }

  ${isCurrentPage &&
  `background-color: ${theme.primary};
        color: ${theme.textWhite};`}
`;
