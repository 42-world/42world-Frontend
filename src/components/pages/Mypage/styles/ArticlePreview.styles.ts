import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

export const articlePreviewWrapper = css`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  font-size: 12px;
  padding: 5px 10px;
  border-bottom: 1px solid ${theme.lineGray1};
`;

export const articleHeaderWrapper = css`
  font-weight: normal;

  &:last-child {
    border-bottom: none;
  }
`;

export const reactionWrapper = css`
  display: flex;
  width: max-content;
  white-space: nowrap;

  & > span {
    display: flex;
    align-items: center;
    padding: 4px;
  }
`;

export const like = css`
  color: ${theme.buttonRed1};
`;

export const comment = css`
  color: ${theme.buttonBlue2};
`;
