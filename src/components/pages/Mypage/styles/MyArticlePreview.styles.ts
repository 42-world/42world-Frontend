import { css } from '@emotion/react';
import { theme } from '@root/styles/theme';

import { ARTICLE_TYPE } from '@components/pages/Mypage/utils';

export const myArticlePreviewWrapper = (type: number) => css`
  background: ${theme.white};
  box-shadow: ${theme.boxShadow};
  border-radius: ${theme.borderRadius};

  margin: 0.5rem 0;
  width: ${type === ARTICLE_TYPE.LIKED ? 'calc(100%);' : 'calc(50% - 0.8rem);'};

  ${theme.mobileSize} {
    box-shadow: none;
    border-bottom: 1px solid ${theme.lineGray1};
    border-radius: 0;
    width: 100%;
    margin: 0;
  }
`;

export const myArticlePreviewTitleWrapper = css`
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid ${theme.lineGray1};

  & > h2 {
    display: flex;
    align-items: center;
    font-weight: 700;
    margin: 0.3rem;
  }

  & > button {
    margin: 0.3rem;
    border: none;
    background: transparent;
    cursor: pointer;
  }

  ${theme.mobileSize} {
    background-color: ${theme.backgroundGray2};
  }
`;
