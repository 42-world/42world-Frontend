/** @jsxImportSource @emotion/react */

import styled from 'styled-components';

import CategoryList from '@root/common/CategoryList';
import { Advertisement } from '@root/components/organisms/category';
import { Container } from '@root/components/atoms/global';
import { css } from '@emotion/react';
import { block } from './styles';

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
`;

const categoryBlock = css`
  width: 12rem;
  min-width: 12rem;
`;

export default Board;
