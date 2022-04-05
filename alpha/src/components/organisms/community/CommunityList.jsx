import React from "react";
import styled from "styled-components";

const CommunityList = () => {
  const [curCommunity] = React.useState("자유게시판");

  const communityList = [
    "자유게시판",
    "익명게시판1",
    "익명게시판2",
    "지듣노[지최가 듣는 노래]",
    "42Chelin",
    "고양이게시판",
    "강아지게시판",
  ];

  return (
    <CommunityListBlock>
      <h2>커뮤니티</h2>
      {communityList.map((community) => {
        if (community === curCommunity)
          return (
            <li className="curCommunity" key={community}>
              {community}
            </li>
          );
        else return <li key={community}>{community}</li>;
      })}
    </CommunityListBlock>
  );
};

const CommunityListBlock = styled.div`
  width: 100%;
  background-color: #fff;
  padding: 1rem;
  box-shadow: ${(props) => props.theme.boxShadow};
  border-radius: 0.4rem;

  h2 {
    font-size: 1.2rem;
    border-bottom: 1px solid #ddd;
    padding: 0.3rem 0;
    margin-bottom: 0.5rem;
  }

  li {
    font-size: 0.9rem;
    list-style: none;
    margin: 0.3rem 0;
    font-weight: 600;
  }
  .curCommunity {
    color: #53b7ba;
  }
`;

export default CommunityList;
