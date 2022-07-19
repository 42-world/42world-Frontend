/** @jsxImportSource @emotion/react */

import styled from 'styled-components';

import CategoryList from '@root/common/CategoryList';
import { Advertisement } from '@root/components/organisms/category';
import { Container } from '@root/components/atoms/global';
import { css } from '@emotion/react';
import { block } from './styles';
import { theme } from '@styles/theme';

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
    padding-left: 0.5rem;
    margin: 0px;
  }
`;

export default Board;
