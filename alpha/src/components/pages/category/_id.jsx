import React from "react";
import styled from "styled-components";
import { Container } from "../../atoms/global";
import { Board, Advertisement, CategoryList } from "../../organisms/category";
const _id = () => {
  return (
    <CategoryBlock>
      <div className="block community_block">
        <CategoryList />
      </div>
      <div className="block writing_block">
        <Board />
      </div>
      <Advertisement />
    </CategoryBlock>

    // <CategoryBlock>
    //   <div className="body">
    //     <LeftBar />
    //     <Board />
    //     <Advertisement />
    //   </div>
    //   {/* <div className="page">밑에 페이지네이션</div> */}
    // </CategoryBlock>
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
  .community_block {
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

  ${(props) => props.theme.mobileSize} {
    margin-top: 0;
    .community_block {
      display: none;
    }
    .writing_block {
      width: 100%;
      max-width: 100%;
      margin: 0;
    }
  }
`;

export default _id;
