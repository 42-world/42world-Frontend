import React from 'react';
import styled from 'styled-components';
import { Container } from '../../atoms/global';
import { Advertisement, CategoryList } from '../../organisms/category';
import WritingContent from './WritingContent';

const Writing = () => {
  return (
    <WritingBlock>
      <div className="block category_block">
        <CategoryList />
      </div>
      <div className="block writing_block">
        <WritingContent />
      </div>
      <Advertisement />
    </WritingBlock>
  );
};

const WritingBlock = styled(Container)`
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
    & > div {
      margin-bottom: 1.5rem;
    }
  }

  @media screen and (max-width: 1020px) {
    .writing_block {
      max-width: calc(100% - 15.2rem);
      & > div {
        margin-bottom: 1.5rem;
      }
    }
  }

  ${props => props.theme.mobileSize} {
    margin-top: 0;
    .category_block {
      display: none;
    }
    .writing_block {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`;

export default Writing;
