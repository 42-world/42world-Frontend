import React, { useState, useEffect } from "react";
import styled from "styled-components";

import LinkBox from "./LinkBox";

const LinkSection = ({ MyInfo }) => {
  const [myLinks, setMyLinks] = useState(null);

  useEffect(() => {
    setMyLinks({
      intra42: MyInfo?.nickname,
      github: MyInfo?.nickname,
    });
  }, [MyInfo]);

  let arr = [];
  for (let i in myLinks)
    arr.push(<LinkBox userName={myLinks[i]} linkType={i} key={i} />);

  return <LinkSectionDiv>{arr}</LinkSectionDiv>;
};

const LinkSectionDiv = styled.div`
  padding: 0.3rem;
  padding-right: 1rem;
  border-left: solid ${(props) => props.theme.lineGray1};
  flex-shrink: 1;
  flex-grow: 1;
  overflow: auto;
  @media screen and (max-width: 480px) {
    padding: 0.3rem 0.5rem;
    display: flex;
    flex-direction: row;
    border: none;
    border-top: solid ${(props) => props.theme.lineGray1};
    svg {
      margin: 0.3rem;
    }
    span {
      display: none;
    }
  }
`;

export default LinkSection;
