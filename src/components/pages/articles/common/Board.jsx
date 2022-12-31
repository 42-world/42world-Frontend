/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';

import CategoryList from '@common/CategoryList';
import Advertisement from './Advertisement';

import { block } from './styles';
import { theme } from '@root/styles/theme';

const Board = ({ categoryId, children }) => {
  return (
    <div css={boardContainer}>
      <div css={[block, categoryBlock]}>
        <CategoryList categoryId={categoryId} />
      </div>
      {children}
      <Advertisement />
    </div>
  );
};

const boardContainer = css`
  display: flex;
  margin: 0 auto;
  width: 100%;
  max-width: 1100px;
  flex-direction: row;
  margin-top: 1.5rem;
    width: 100%;
  }

  ${theme.mobileSize} {
    flex-direction: column;
    margin-top: 0px;
  }
`;

const categoryBlock = css`
  width: 12rem;
  min-width: 12rem;

  ${theme.mobileSize} {
    width: 100%;
    margin: 0px;
  }
`;

export default Board;
