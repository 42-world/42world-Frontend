/** @jsxImportSource @emotion/react */

import styled from 'styled-components';
import { css } from '@emotion/react';

import CategoryList from '@common/CategoryList';
import { Container } from '@components/atoms/global';
import { block } from './styles';
import { theme } from '@styles/theme';
import Advertisement from './Advertisement';

const Board = ({ categoryId, children }) => {
  return (
    <BoardContainer>
      <div css={[block, categoryBlock]}>
        <CategoryList categoryId={categoryId} />
      </div>
      {children}
      <Advertisement />
    </BoardContainer>
  );
};

const BoardContainer = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

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
