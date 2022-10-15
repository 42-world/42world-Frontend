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
  margin: 0.4rem 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: normal;

  &:last-child {
    border-bottom: none;
  }
`;

export const reactionWrapper = css`
  display: flex;
  width: max-content;
  white-space: nowrap;

  & > div {
    align-items: center;
    padding: 4px;
  }
`;

export const like = (likeCount: number) => css`
  display: ${likeCount < 0 ? 'none' : 'flex'};
  color: ${theme.buttonRed1};
`;

export const comment = (commentCount: number) => css`
  display: ${commentCount < 0 ? 'none' : 'flex'};
  color: ${theme.buttonBlue2};
`;
