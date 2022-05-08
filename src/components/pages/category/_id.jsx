import React from 'react';
import styled from 'styled-components';
import { Container } from '../../atoms/global';
import { Advertisement, Board, CategoryList } from '../../organisms/category';
const _id = () => {
  return (
    <CategoryBlock>
      <div className="block category_block">
        <CategoryList />
      </div>
      <div className="block writing_block">
        <Board />
      </div>
      <Advertisement />
    </CategoryBlock>
  );
};

const CategoryBlock = styled(Container)`
  display: flex;
  flex-direction: row;
  margin-top: 1.5rem;

  & > .block {
    margin: 0 0.8rem;
    width: 100%;
  }
  .category_block {
    width: 12rem;
    min-width: 12rem;
  }
  .writing_block {
    max-width: calc(100% - 15.2rem - 9rem - 1.6rem);
  }

  @media screen and (max-width: 1020px) {
    display: flex;
    flex-direction: column;
    .writing_block {
      max-width: calc(100% - 15.2rem);
    }
  }

  ${props => props.theme.mobileSize} {
    margin-top: 0;
    display: flex;
    flex-direction: column;
    .category_block {
      margin: 0;
      padding-left: 0.5rem;
      width: 100%;
    }
    .writing_block {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`;

export default _id;
